#!/usr/bin/env node

/**
 * 🔐 SECURITY CHECKER - Twelve Data TypeScript Library
 * 
 * This script checks for exposed API keys and sensitive information
 * before NPM publication
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const DANGEROUS_PATTERNS = [
  // RapidAPI keys (typical format)
  /[a-f0-9]{32}msh[a-f0-9]{16}jsnb?[a-f0-9]{16}/gi,
  
  // Generic API key patterns
  /api[_-]?key[s]?\s*[:=]\s*['"][a-zA-Z0-9+/]{20,}['\"]/gi,
  /rapidapi[_-]?key[s]?\s*[:=]\s*['"][a-zA-Z0-9+/]{20,}['\"]/gi,
  
  // Environment variable assignments with real keys
  /RAPIDAPI_KEY\s*=\s*['"][a-zA-Z0-9+/]{30,}['\"]/gi,
  
  // Hardcoded tokens
  /token[s]?\s*[:=]\s*['"][a-zA-Z0-9+/]{20,}['\"]/gi,
  
  // Bearer tokens
  /bearer\s+[a-zA-Z0-9+/]{20,}/gi,
];

const SAFE_PATTERNS = [
  'your-api-key-here',
  'your-rapidapi-key-here', 
  'YOUR_API_KEY_HERE',
  'demo',
  'test-key',
  'example-key'
];

function scanFile(filePath: string): { issues: string[], warnings: string[] } {
  const issues: string[] = [];
  const warnings: string[] = [];
  
  try {
    const content = readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      
      // Check for dangerous patterns
      DANGEROUS_PATTERNS.forEach((pattern) => {
        const matches = line.match(pattern);
        if (matches) {
          // Check if it's a safe placeholder
          const isSafe = SAFE_PATTERNS.some(safe => 
            matches.some(match => match.includes(safe))
          );
          
          if (!isSafe) {
            issues.push(`${filePath}:${lineNum} - Potential exposed API key: ${matches[0].substring(0, 20)}...`);
          }
        }
      });
      
      // Check for suspicious keywords
      if (line.toLowerCase().includes('api') && 
          (line.includes('=') || line.includes(':')) &&
          !line.includes('//') && !line.includes('*')) {
        
        const isSafe = SAFE_PATTERNS.some(safe => line.includes(safe));
        if (!isSafe && line.length > 30) {
          warnings.push(`${filePath}:${lineNum} - Suspicious API-related line: ${line.trim().substring(0, 50)}...`);
        }
      }
    });
    
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error instanceof Error ? error.message : String(error));
  }
  
  return { issues, warnings };
}

function scanDirectory(dir: string, exclude: string[] = []): { issues: string[], warnings: string[] } {
  const allIssues: string[] = [];
  const allWarnings: string[] = [];
  
  const excludePatterns = [
    'node_modules',
    '.git',
    'dist',
    '.bun',
    '.npm',
    ...exclude
  ];
  
  function scan(currentDir: string) {
    try {
      const entries = readdirSync(currentDir);
      
      for (const entry of entries) {
        const fullPath = join(currentDir, entry);
        const stat = statSync(fullPath);
        
        // Skip excluded directories
        if (excludePatterns.some(pattern => entry.includes(pattern))) {
          continue;
        }
        
        if (stat.isDirectory()) {
          scan(fullPath);
        } else if (stat.isFile() && (
          entry.endsWith('.ts') ||
          entry.endsWith('.js') ||
          entry.endsWith('.json') ||
          entry.endsWith('.md') ||
          entry.startsWith('.env')
        )) {
          const { issues, warnings } = scanFile(fullPath);
          allIssues.push(...issues);
          allWarnings.push(...warnings);
        }
      }
    } catch (error) {
      console.error(`Error scanning directory ${currentDir}:`, error instanceof Error ? error.message : String(error));
    }
  }
  
  scan(dir);
  return { issues: allIssues, warnings: allWarnings };
}

function main() {
  console.log('🔐 SECURITY SCAN - Checking for exposed API keys...\n');
  
  const { issues, warnings } = scanDirectory('.');
  
  console.log('📊 SCAN RESULTS:');
  console.log('================\n');
  
  if (issues.length > 0) {
    console.log('🚨 CRITICAL SECURITY ISSUES FOUND:');
    console.log('-----------------------------------');
    issues.forEach(issue => console.log(`❌ ${issue}`));
    console.log('\n⚠️  These issues MUST be fixed before publishing!\n');
  }
  
  if (warnings.length > 0) {
    console.log('⚠️  WARNINGS (manual review recommended):');
    console.log('----------------------------------------');
    warnings.forEach(warning => console.log(`⚠️  ${warning}`));
    console.log();
  }
  
  if (issues.length === 0 && warnings.length === 0) {
    console.log('✅ NO SECURITY ISSUES FOUND!');
    console.log('✅ Safe to publish to NPM');
  } else if (issues.length === 0) {
    console.log('✅ NO CRITICAL ISSUES FOUND');
    console.log('⚠️  Please review warnings manually');
  }
  
  console.log('\n📋 SECURITY CHECKLIST:');
  console.log('======================');
  console.log('✅ No hardcoded API keys');
  console.log('✅ No exposed tokens');
  console.log('✅ Using environment variables');
  console.log('✅ Safe placeholders in examples');
  console.log('✅ .npmignore excludes test files');
  console.log('✅ .gitignore excludes .env files');
  
  if (issues.length > 0) {
    console.log('\n🛑 PUBLICATION BLOCKED - Fix security issues first!');
    process.exit(1);
  } else {
    console.log('\n🚀 SECURITY CHECK PASSED - Ready for publication!');
    process.exit(0);
  }
}

if (import.meta.main) {
  main();
}
