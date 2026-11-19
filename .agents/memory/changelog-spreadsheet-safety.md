---
name: Change-log spreadsheet safety
description: Preserving the existing JOLO workbook when updating through the Google Drive connection.
---

The Google Drive connection uses the www.googleapis.com API base; Sheets API paths under that base return 404. Updating a native spreadsheet by importing an XLSX through Drive is supported, but replaces the entire workbook content.

**Why:** A successful upload alone does not prove that prior tabs, entries, or link inventories survived conversion.

**How to apply:** Export the current workbook first rather than rebuilding from stale local data. Preserve all tabs and old entries, check for concurrent modifications before updating the same file, and re-export afterward to confirm new entries, descending dates, duplicate prevention, and retained historical content. A workbook entry's Git commit time is not the push time or a publication timestamp.
