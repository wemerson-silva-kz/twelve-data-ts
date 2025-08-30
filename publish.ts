#!/usr/bin/env node

/**
 * 🚀 TWELVE DATA TYPESCRIPT LIBRARY - PUBLICATION SCRIPT
 * 
 * This script helps you publish the twelve-data-ts library to NPM
 * Follow the steps below to ensure a successful publication
 */

import { execSync } from 'child_process';
import { readFileSync } from 'fs';

function runCommand(command: string, description: string) {
  console.log(`\n🔄 ${description}...`);
  try {
    const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(`✅ ${description} completed successfully`);
    return output;
  } catch (error) {
    console.error(`❌ ${description} failed:`, error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

function checkNpmLogin() {
  try {
    const user = execSync('npm whoami', { encoding: 'utf8' }).trim();
    console.log(`✅ Logged in as: ${user}`);
    return user;
  } catch (error) {
    console.error('❌ Not logged into NPM. Please run: npm login');
    process.exit(1);
  }
}

function checkPackageInfo() {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  console.log(`\n📦 Package Info:`);
  console.log(`   Name: ${pkg.name}`);
  console.log(`   Version: ${pkg.version}`);
  console.log(`   Description: ${pkg.description}`);
  return pkg;
}

function main() {
  console.log('🚀 TWELVE DATA TYPESCRIPT LIBRARY - NPM PUBLICATION\n');
  
  // Step 1: Check NPM login
  console.log('Step 1: Checking NPM authentication...');
  checkNpmLogin();
  
  // Step 2: Check package info
  console.log('\nStep 2: Verifying package information...');
  const pkg = checkPackageInfo();
  
  // Step 3: Build the project
  console.log('\nStep 3: Building the project...');
  runCommand('bun run build', 'Building TypeScript project');
  
  // Step 4: Run tests (if available)
  console.log('\nStep 4: Running tests...');
  try {
    runCommand('bun test', 'Running tests');
  } catch (error) {
    console.log('⚠️  No tests found or tests failed, continuing...');
  }
  
  // Step 5: Check package contents
  console.log('\nStep 5: Verifying package contents...');
  const packOutput = runCommand('npm pack --dry-run', 'Checking package contents');
  console.log(packOutput);
  
  // Step 6: Confirm publication
  console.log('\n🎯 Ready to publish!');
  console.log(`\nTo publish run: npm publish`);
  console.log(`Package: ${pkg.name}@${pkg.version}`);
  console.log(`Size: Will be displayed above`);
  
  console.log('\n✨ Publication checklist:');
  console.log('✅ NPM login verified');
  console.log('✅ Package info verified');
  console.log('✅ Build completed');
  console.log('✅ Package contents verified');
  console.log('🚀 Ready for: npm publish');
  
  console.log('\n🎉 Your twelve-data-ts library is ready for the world!');
}

if (import.meta.main) {
  main();
}
