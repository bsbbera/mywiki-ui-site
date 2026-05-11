---
title: <% tp.file.title %>
Created:
  - <% tp.file.creation_date("YYYY-MM-DD") %>
date modified: Tuesday, April 14th 2026, 9:28:50 pm
aliases:
category:
tags:
banner:
dg-publish: true
---
---
<%*
// Fetch the daily quote
const quote = await tp.web.daily_quote();

// Clean the quote - remove ALL formatting artifacts
const cleanedQuote = quote
  .replace(/^>\s*\[!quote\]\s*/, '')  // Remove [!quote] callout
  .replace(/^>\s*/, '')              // Remove remaining blockquote markers
  .trim();

// Extract text and author
const quoteText = cleanedQuote.split('—')[0].trim().replace(/^"|"$/g, '');
const author = cleanedQuote.split('—')[1]?.trim() || "Unknown";

// Format with clean blockquote and cite
tR += `> "${quoteText}"\n> <cite>— ${author}</cite>`;
%>

---

## Content

Start writing here...