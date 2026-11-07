---
name: human-writing
description: Write or edit copy so it doesn't read as AI-generated. Use for any text Ben will publish or send as his own: portfolio pages, case studies, captions, the résumé, cover letters, LinkedIn posts, emails. Based on Wikipedia's "Signs of AI writing" guide. Run the checklist on every draft and the scanner before shipping.
---

# Human writing

Text that goes out under Ben's name must not show the patterns Wikipedia lists in "Wikipedia:Signs of AI writing". Write plainly, the way a working game designer talks about his own work: specific facts, simple verbs, short sentences that vary in length.

## How to use

1. Draft the copy.
2. Go through every section below and rewrite anything that matches.
3. Run the scanner on the files you touched and fix each hit, or confirm it's a literal use:
   `python3 .claude/skills/human-writing/scripts/scan.py path/to/file.html [more files]`
4. Read it once more out loud. If a sentence sounds like a press release, cut it down to the fact.

## Content patterns

Never write these. Say the concrete fact instead.

- Inflated significance. Sentences that say how something "stands as", "serves as" or "is a testament/reminder" to something, or that call a role "crucial", "pivotal", "vital", "significant" or "key". Also "reflects broader", "symbolizing its ongoing/enduring/lasting", "contributing to the", "setting the stage for", "marking/shaping the", "represents/marks a shift", "key turning point", "evolving landscape", "focal point", "indelible mark", "deeply rooted", and "this distinction matters because".
- Placing the subject inside broader "debates" or "public discussions" it was never part of.
- Canned notability. "Independent coverage", "local/national media outlets", "trade publications", "cited/featured/profiled in", "written by a leading expert", "active social media presence". Link the article and say what it said.
- Leaning on databases or listings as proof: "records identify him as", "is listed in", "his professional profile lists".
- Superficial analysis tacked onto the end of a sentence with an -ing phrase: ", highlighting ...", ", underscoring ...", ", emphasizing ...", ", ensuring ...", ", reflecting ...", ", symbolizing ...", ", contributing to ...", ", cultivating ...", ", fostering ...", ", encompassing ...", ", enhancing ...". Also "valuable insights" and "align/resonate with". If the point matters, give it its own sentence with a real subject.
- Vague connection instead of the actual relationship: "in connection with", "connected with/to", "in association with", "associated with". Write "he led", "she taught", "it links".
- Vague attribution and overgeneralizing: "industry reports", "observers have cited", "experts argue", "some critics argue", "several sources" when there's one, "such as" before a list that is actually complete.
- Outline-style endings: "Despite its ..., it faces several challenges", "Despite these challenges", "Challenges and legacy", "Future outlook".
- An "Awards and recognition" style block padded out with minor items.

## Vocabulary

Avoid these words. A word is fine only when it's literal (a keyboard key, a game mode named "Daily Challenge", the Intel University Games Showcase, a quest whose real name contains one).

- 2023 to mid-2024: additionally (especially opening a sentence), boasts, bolstered, crucial, delve, emphasizing, enduring, garner, intricate/intricacies, interplay, key, landscape, meticulously, pivotal, underscore, tapestry, testament, valuable, vibrant.
- Mid-2024 to mid-2025: align with, bolstered, crucial, emphasizing, enhance, enduring, fostering, highlighting, pivotal, showcasing, underscore, vibrant.
- Mid-2025 to mid-2026: emphasizing, enhance, highlighting, showcasing.
- Mid-2026 on: challenge, clearer, dependable, echoed, foster, leverage, matters, multifaceted, practical, prioritize, quietly, steady, universally.
- Also: deep dive, robust, meticulous.
- Promotional words: boasts a, vibrant, rich, profound, enhancing, showcasing, exemplifies, commitment to, natural beauty, nestled, in the heart of, groundbreaking, renowned, featuring, diverse array.
- Grok-style "scientific" filler: causal, empirical, correlate.

## Grammar

- Use plain copulas. Write "is", "are", "was", "has". Don't write "serves as", "stands as", "marks", "functions as", "operates as", "represents", "boasts", "features", "maintains", "offers", or "refers to" when "is" or "has" works. Don't dress up a fact as a career move ("ventured into", "began his career as") when "was" is true.
- No negative parallelisms. Cut "not only ... but also", "it's not just X, it's Y", "doesn't just X; it Y", "not X, but Y", and "Y rather than X" when nobody claimed X.
- No rule of three for rhythm. Don't stack three adjectives or three short phrases to sound thorough. A list of three is fine only when there are exactly three real things.
- Don't treat a list or a broad topic as a proper noun.
- Prefer the plain verb: wrote (not authored), moved (not relocated), used (not utilized), tried (not attempted), died (not passed away).
- Human writing has simple "is/has" sentences, definite claims ("the only", "the first") where they're true, and the odd wordy phrase. Don't sand those out.
- Vary sentence length. Don't lock every sentence to 8 to 20 words.
- Don't cycle synonyms to avoid repeating a word (elegant variation). Repeat the right word.

## Style and formatting

- Sentence case for headings. Title Case only for proper nouns and titles of works.
- No bold inside paragraphs or captions. No asterisks for emphasis.
- No inline-header bullet lists where each item starts with a bold label and a colon. Write the item as a sentence, or use a real table.
- Correct heading levels. Don't open with a level 1 heading that repeats the page title, and don't stack level 1 headings.
- No emoji at the start of headings or list items.
- Straight quotes and apostrophes (" and '), not curly ones (“ ” ‘ ’).
- No em dashes (—). Use a period, comma, colon, or parentheses. Ranges take an en dash (2024–2025).
- Use punctuation with variety. Don't swap every dash for a period so the text becomes all short, flat sentences.
- No Markdown syntax in places that don't render it.

## Chatbot leftovers

Never let these into published text:

- Talking to the reader as an assistant: "I hope this helps", "Of course!", "Certainly!", "You're absolutely right!", "Would you like ...", "Is there anything else", "let me know", "here is a", "a more detailed breakdown", "check/verify before publishing".
- Hedging about sources: "while specific details are limited/scarce", "not widely available/documented/disclosed", "in the provided/available sources", "based on available information", "should be treated as ... rather than ...", "does not by itself establish".
- Knowledge-cutoff talk: "as of my last training update".
- Refusals and self-reference: "as an AI language model", "as a large language model", "I'm sorry, but".
- Section-ending summaries: "In summary", "In conclusion", "Overall".
- Placeholder text: [Name], [Date], INSERT_URL, example.com links, 2025-XX-XX dates.
- Text that stops mid-sentence.
- Change notes in an edit summary that sound like a press release: "ensured adherence", "refined", "enhanced", "enriched", "streamlined", "improved clarity and flow", "preserved/retained", "avoided", "added verified information", "improved attribution".

## Citations and links (when the copy cites anything)

- Every link must work and point at the thing it claims. No links to search results, no `utm_source=` tracking parameters.
- Book citations need page numbers or a URL. DOIs and ISBNs must be real and match the work.
- Don't over-announce sources ("according to multiple reliable sources").

## Also watch for

- A sudden change in voice partway through a piece.
- Content that leans flattering or positive by default. State what happened, including limits ("canceled", "under NDA", "a student project").
- Uniform paragraph length and rhythm across a whole page.

## Not reliable signs (don't over-correct)

Perfect grammar, formal or academic words in general, a mix of casual and technical tone, plain or "bland" prose, single transition words in isolation, and unsourced statements are not evidence of AI on their own. Don't strip Ben's real voice to avoid them.
