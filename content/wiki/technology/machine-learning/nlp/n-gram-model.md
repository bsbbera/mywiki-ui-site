---
title: N-Gram Model
created:
  - 2026-06-08
date modified: Tuesday, June 9th 2026, 6:11:45 pm
aliases:
  - N-Gram
  - NGram
  - N-gram Language Model
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - LanguageModeling
  - TextRepresentation
  - Statistics
banner: https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1400
publish: true
---

> "The best predictor of what comes next is what came before."
> <cite>— Markov property, informal</cite>

---

<span class="at-kicker">NLP · Language Modeling</span>

# N-Gram Model

<p class="at-lead">
N-gram models are the simplest statistical language models: they predict the next word in a
sequence based only on the previous n−1 words. Despite their simplicity, they underpin
spell-checkers, speech recognition, keyboard prediction, and machine translation — and they
reveal deep statistical regularities in human language.
</p>

<span class="at-stat">local context</span> &nbsp;·&nbsp; <span class="at-stat">count-based</span> &nbsp;·&nbsp; <span class="at-stat">Markov assumption</span> &nbsp;·&nbsp; <span class="at-mark">history in a window</span>

<span class="at-kicker">Definition</span>

## What Is an N-Gram?

An **n-gram** is a contiguous sequence of $n$ items from a given text. The items are usually
words (word n-grams) or characters (character n-grams).

> [!columns|ruled]
>
>> [!col]
>> | Order | Name        | Example from "The cat sat on the mat"           |
| ----- | ----------- | ----------------------------------------------- |
| 1     | **Unigram** | the, cat, sat, on, the, mat                     |
| 2     | **Bigram**  | the cat, cat sat, sat on, on the, the mat       |
| 3     | **Trigram** | the cat sat, cat sat on, sat on the, on the mat |
| 4     | **4-gram**  | the cat sat on, cat sat on the, sat on the mat  |
>
>> [!col]
>> #### Subword n-grams
> Character-level n-grams are robust to typos and morphological variation. "unbelievable" yields 4-grams: unbe, nbel, beli, elie, liev, ieval,evab, vabl, able. These are the basis of many classical text-classification features.


## The Markov Assumption

N-gram models rely on the **Markov assumption**: the probability of a word depends only on a
finite window of preceding context, not the entire history.

$$P(w_1, w_2, \dots, w_m) \approx \prod_{i=1}^{m} P(w_i \mid w_{i-n+1}, \dots, w_{i-1})$$

For a **bigram** ($n=2$):

$$P(w_i \mid w_{i-1}) = \frac{C(w_{i-1}, w_i)}{C(w_{i-1})}$$

Where $C(\cdot)$ denotes the raw count in a training corpus.

### Smoothing: Handling Unseen N-Grams

Raw counts fail when an n-gram never appeared in training. **Smoothing** redistributes probability
mass from frequent to unseen events:

| Technique | Core Idea | Formula Sketch |
|-----------|-----------|--------------|
| **Laplace (add-1)** | Pretend every n-gram appeared once more | $\frac{C(w_{i-1},w_i)+1}{C(w_{i-1})+V}$ |
| **Add-$k$** | Generalised Laplace with smaller $k$ | $\frac{C(w_{i-1},w_i)+k}{C(w_{i-1})+kV}$ |
| **Backoff** | Fall back to $(n-1)$-gram if $n$-gram is unseen | Katz smoothing |
| **Kneser-Ney** | Discount observed counts, interpolate | State-of-the-art for classical n-grams |

> [!tip] Why smoothing matters
> Even a corpus of billions of words contains only a tiny fraction of all possible trigrams.
> Without smoothing, any unseen sequence would receive zero probability — a **sparse-data
> catastrophe**.

---

<span class="at-kicker">Language & Power Laws</span>

## Zipf's Law

**Zipf's law** states that in any natural language corpus, the frequency of a word is inversely
proportional to its rank in the frequency table:

$$f(r) \propto \frac{1}{r^s}$$

Where $f(r)$ is the frequency of the word ranked $r$-th, and $s$ is an exponent close to 1.

### Consequences

| Rank | Word (example) | Approximate frequency |
|------|----------------|----------------------|
| 1st | the | ~7% of all tokens |
| 2nd | of | ~3.5% (half of 1st) |
| 3rd | and | ~2.3% (one-third of 1st) |
| 10th | said | ~0.7% |
| 100th | government | ~0.07% |

> [!info] The long tail
> The top 100 words account for roughly half of all tokens in English text. The remaining half
> is spread across millions of rare words — a classic **long-tail distribution**.

### Why Zipf's Law Matters for N-Grams

- **Vocabulary explosion**: Even though most words are rare, the number of *possible* bigrams
  is $V^2$ and trigrams is $V^3$. For $V \approx 50{,}000$, that's $125 \times 10^{15}$ trigrams.
- **Data sparsity**: No corpus is large enough to cover all possible n-grams for $n \geq 3$.
- **Smoothing necessity**: The power-law distribution makes smoothing algorithms critical;
  Kneser-Ney smoothing was designed explicitly to exploit the observation that words appearing
  in many *different* contexts are more likely to appear in new ones.

---

<span class="at-kicker">Applications</span>

## Where N-Grams Still Live

Despite being eclipsed by neural language models, n-grams remain useful in production:

| Application | Why N-Grams Work Well |
|-------------|----------------------|
| **Autocorrect / spell-check** | Local context (2–3 words) is usually enough to detect errors |
| **Speech recognition** | Fast, low-latency scoring of phoneme sequences |
| **Plagiarism detection** | Character n-grams capture writing style fingerprints |
| **Language identification** | Distinctive character n-gram patterns per language |
| **Spam filtering** | Word bigrams capture phrases like "free money" |
| **Named Entity Recognition** | Part-of-speech n-grams help tag sequences |

---

<span class="at-kicker">Limitations</span>

## The Curse of Dimensionality

| Problem | Description |
|---------|-------------|
| **Context window** | A 5-gram sees only 4 words of history; it cannot resolve long-range dependencies |
| **Vocabulary size** | Storage grows as $V^n$ — impractical for $n > 5$ |
| **Semantic blindness** | "Strong tea" and "powerful tea" have different counts but similar meaning |
| **Domain shift** | A model trained on news performs poorly on medical text |

> [!warning] Neural models vs n-grams
> Neural language models (RNNs, Transformers) learn distributed representations that generalise
> across semantically similar words. An n-gram treats "cat" and "feline" as entirely unrelated
> unless the exact bigram "the feline" was seen in training.

## Interesting facts

- The term *n-gram* was coined by Claude Shannon in his 1948 paper *"A Mathematical Theory of
  Communication"*.
- Google published a publicly available **Web 1T 5-gram** corpus in 2006 containing over a
  trillion word tokens.
- In 2007, a simple trigram model with Kneser-Ney smoothing achieved competitive BLEU scores
  in machine translation — demonstrating that elegant statistical methods can rival early
  neural approaches.

## Interview questions

1. What is the Markov assumption, and what do we lose by making it?
2. Why does Laplace smoothing tend to over-smooth large corpora? How does Kneser-Ney improve on it?
3. Given Zipf's law, why is it impossible to collect enough data to cover all possible trigrams?
4. How would you build a language identifier using character n-grams?
5. Compare n-gram perplexity vs neural model perplexity on the same test set. What does the gap tell you?

## Related pages

> [!grid]
>
>> [!card] Language & Representation
>> [[nlp-fundamentals|NLP Fundamentals]], [[word2vec|Word2Vec]], [[language-models|Language Models]], [[transformers|Transformers]]
>
>> [!card] Statistical Foundations
>> [[probability-distributions|Probability Distributions]], [[statistics|Statistics]], [[sampling|Sampling]]
>
>> [!card] Deep Learning
>> [[neural-networks|Neural Networks]], [[deep-learning|Deep Learning]], [[optimisation-algorithms|Optimisation Algorithms]]
>
>> [!card] Applications
>> [[machine-translation|Machine Translation]] · [[speech-to-text|Speech-to-Text]] · [[text-classification|Text Classification]]
