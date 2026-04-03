#!/usr/bin/env python3
"""Add a Google user as admin. Run on VPS after Google SSO setup."""
import sys
import os
sys.path.insert(0, '/home/ubuntu/ccsp-quiz')

import sqlite3, secrets, time

DB_PATH = '/home/ubuntu/ccsp-quiz/auth.db'

def get_admin_token():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()
    cur.execute("SELECT token FROM users WHERE id = 'admin'")
    row = cur.fetchone()
    conn.close()
    if not row:
        print("ERROR: Admin user not found. Run flask app first to initialize DB.")
        sys.exit(1)
    return row['token']

def add_admin(google_id, email, name=''):
    admin_token = get_admin_token()
    conn = sqlite3.connect(DB_PATH)
    conn.execute('INSERT OR REPLACE INTO admins (google_id, email, name, added_at) VALUES (?, ?, ?, ?)',
                 (google_id, email, name, int(time.time())))
    conn.commit()
    conn.close()
    print(f"Added admin: {email} (google_id: {google_id})")

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python add-admin.py <google_id> <email> [name]")
        print("  google_id: The Google user ID (sub claim from Google OAuth)")
        print("  email: The user's Google email")
        print("  name: Optional display name")
        print()
        print("Example: python add-admin.py 107123456789012345678 tommytang@gmail.com Tommy")
        sys.exit(1)
    google_id = sys.argv[1]
    email = sys.argv[2]
    name = sys.argv[3] if len(sys.argv) > 3 else ''
    add_admin(google_id, email, name)
