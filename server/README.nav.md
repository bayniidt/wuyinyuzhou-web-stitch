# Navigation Management - Setup Guide

## 📋 Overview

This guide explains how to set up and use the navigation management system.

## 🔧 Current Situation

The main `database.sqlite` file has an **old navigation table structure** without the new fields (group_id, description_zh, etc.).

To properly test and develop the feature, we created a separate test database: `database_test.sqlite`.

## 🚀 Quick Start (Development/Test)

### Option 1: Use Test Database (Recommended for Development)

```bash
# Set environment variable to use test database
export NAV_DB_PATH=./database_test.sqlite

# Run sync script to populate data
cd server && node sync-navigation.js

# Update DATABASE_PATH in db.js temporarily
# OR set environment variable when starting server
DATABASE_PATH=./database_test.sqlite node index.js
```

### Option 2: Recreate Main Database

If you want to replace the main database with the correct structure:

```bash
# Stop any running Node processes using database.sqlite
# Then delete or backup the old database
mv database.sqlite database.sqlite.backup

# Create fresh database with correct structure
NODE_ENV=test node db.js  # This will create new one on first load

# Sync navigation data
NAV_DB_PATH=./database.sqlite node sync-navigation.js
```

## 📝 Migration Script

A migration script is available to update the existing navigation table:

```bash
node migrate-navigation-structure.js
```

This script:
1. Checks current table structure
2. Creates new table with correct columns if needed
3. Migrates existing data
4. Runs sync-navigation.js

## 🗄️ Database Structure

```sql
CREATE TABLE navigation (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  group_id TEXT,              -- Group identifier (e.g., "ecosystem")
  group_label_zh TEXT,        -- Group name in Chinese
  group_label_en TEXT,        -- Group name in English
  name_zh TEXT,               -- Item name in Chinese
  name_en TEXT,               -- Item name in English
  href TEXT,                  -- URL link
  description_zh TEXT,        -- Description in Chinese
  description_en TEXT,        -- Description in English
  display_order INTEGER,      -- Sort order (lower = first)
  parent_id INTEGER DEFAULT 0,-- Parent ID for hierarchy
  created_at DATETIME,        -- Creation timestamp
  updated_at DATETIME         -- Last update timestamp
);
```

## 🔄 Data Source

Navigation data is extracted from:
1. **src/config/navigation.ts** - Defines group IDs, routes, and item keys
2. **src/i18n/catalog/zh.ts** - Chinese labels and descriptions
3. **src/i18n/catalog/en.ts** - English labels and descriptions

## 💡 API Endpoints

All endpoints are defined in `server/index.js`:

- `GET /api/navigation` - Get all navigation items
- `POST /api/navigation` - Create new navigation item
- `PUT /api/navigation/:id` - Update navigation item
- `DELETE /api/navigation/:id` - Delete navigation item

## 🎯 Admin Integration

Admin interface at `/navigation` page can manage all these records via the API above.

## ⚠️ Important Notes

1. The main production database should be used when deploying
2. Test database (`database_test.sqlite`) is for development only
3. Always backup before running migration scripts
4. Ensure all Node processes have stopped before manipulating database files

---

**Last Updated**: 2026-04-28
