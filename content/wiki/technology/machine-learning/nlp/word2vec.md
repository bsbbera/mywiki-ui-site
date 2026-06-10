---
title: Word2Vec
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Word2Vec
  - CBOW
  - Skip-Gram
  - Word Embeddings
  - Distributed Representations
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - WordEmbeddings
  - NeuralNetworks
  - DeepLearning
banner: https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "You shall know a word by the company it keeps."
> <cite>— J.R. Firth (1957)</cite>

---

<span class="at-kicker">NLP · Word Embeddings</span>

# Word2Vec

<p class="at-lead">
Word2Vec is a framework for learning word vectors that revolutionized natural language processing. By training shallow neural networks to predict words from their context (or vice versa), Word2Vec learns dense, distributed representations that capture semantic and syntactic relationships. Words with similar meanings cluster together in vector space, enabling analogies through vector arithmetic and providing the foundation for modern NLP.
</p>

<span class="at-stat">CBOW</span> &nbsp;·&nbsp; <span class="at-stat">Skip-Gram</span> &nbsp;·&nbsp; <span class="at-stat">300-dim</span> &nbsp;·&nbsp; <span class="at-mark">learning meaning from context</span>

<span class="at-kicker">Core Concept</span>

## Distributed Representations

Word2Vec learns embeddings where similar words have similar vectors. The algorithm is capable of understanding the semantic similarity of words using cosine similarity.

### The distributional hypothesis

Words that appear in similar contexts tend to have similar meanings:

| Context | Words appearing |
|---------|-----------------|
| "___ is a breed of dog" | poodle, labrador, beagle |
| "___ brewed a cup" | tea, coffee, herbal |

> [!info] Why this works
> Neural networks learn to predict co-occurring words. To do this well, they must encode semantic relationships in the hidden layer — which becomes our word embedding.

---

<span class="at-kicker">Architectures</span>

## CBOW vs Skip-Gram

Word2Vec comes in two flavors:

> [!grid|cols2]
>
>> [!card|hero dark spanfull]
>> ###### CBOW
>> ### *CBOW*
>> **Continuous Bag of Words**
>> 
>> **Task**: Predict the center word from surrounding context.
>> 
>> **Architecture**: 
>> - Input: Context word vectors (averaged)
>> - Hidden: Projection layer
>> - Output: Center word probability
>> 
>> **Characteristics**:
>> - Faster training (several times faster)
>> - Better accuracy for frequent words
>> - Smooths over some distributional information
>
>> [!card|hero dark spanfull]
>> ###### SKIP-GRAM
>> ### *Skip-Gram*
>> **Skip-Gram Model**
>> 
>> **Task**: Predict surrounding context words from center word.
>> 
>> **Architecture**:
>> - Input: Center word one-hot
>> - Hidden: Projection layer (embedding lookup)
>> - Output: Context word probabilities (multiple)
>> 
>> **Characteristics**:
>> - Works better with small training data
>> - Better representation for rare words
>> - More training examples per word

### Architecture comparison

```
CBOW:                      Skip-Gram:
Context                    Center
  ↓                          ↓
[w1]                       [w]
[w2]  →  AVG  →  Projection  →  Softmax  →  [w1, w2, w3, w4]
[w3]       (hidden)
[w4]
  ↓
Center [w]
```

---

<span class="at-kicker">Training</span>

## How Word2Vec Learns

### Skip-Gram details

**Word encoding**: Each word is encoded in one-hot format:
- Position referencing the word: 1
- All other positions: 0

**Training process**:
1. Input is a one-hot vector (center word)
2. Hidden layer has no activation function (linear projection)
3. Output layer is softmax over vocabulary
4. Target is one-hot for each context word

**The hidden layer as lookup table**:

$$h = W^T \cdot x$$

Where $W$ is the embedding matrix (vocab_size × embedding_dim). Multiplying one-hot $x$ simply selects a row — this is the embedding lookup.

### Training objective

Maximize the log probability of context words given the center word:

$$J(\theta) = \frac{1}{T} \sum_{t=1}^{T} \sum_{-c \leq j \leq c, j \neq 0} \log P(w_{t+j} | w_t)$$

Where $c$ is the context window size.

### Negative sampling

For computational efficiency, Word2Vec uses **negative sampling** instead of full softmax:

$$\log \sigma(v_{w_O}' \cdot v_{w_I}) + \sum_{i=1}^{k} \mathbb{E}_{w_i \sim P_n(w)}[\log \sigma(-v_{w_i}' \cdot v_{w_I})]$$

- Train to distinguish target word ($w_O$) from $k$ random negative samples
- Much faster than computing softmax over entire vocabulary

---

<span class="at-kicker">Properties</span>

## What Word2Vec Captures

### Semantic relationships

Word vectors encode meaning through vector relationships:

| Relationship | Vector arithmetic | Result |
|-------------|-------------------|--------|
| **Gender** | king - man + woman | ≈ queen |
| **Capital** | Paris - France + Italy | ≈ Rome |
| **Plural** | apples - apple + car | ≈ cars |
| **Comparative** | bigger - big + small | ≈ smaller |

> [!example] The famous analogy
> $$\vec{king} - \vec{man} + \vec{woman} \approx \vec{queen}$$
> 
> This works because the vector difference captures the "gender" dimension.

### Similarity measurement

**Cosine similarity** measures the angle between vectors (range: -1 to 1):

$$\text{cos-sim}(A, B) = \frac{A \cdot B}{\|A\| \|B\|}$$

Similar words have cosine similarity near 1; unrelated words near 0; opposite words near -1.

---

<span class="at-kicker">Implementation</span>

## Training Word2Vec

### Using gensim

```python
from gensim.models import Word2Vec
from nltk.tokenize import word_tokenize

# Prepare data
tokenized_sentences = [
    word_tokenize(sent.lower()) 
    for sent in sentences
]

# Train model
model = Word2Vec(
    sentences=tokenized_sentences,
    vector_size=300,      # Embedding dimension
    window=5,             # Context window size
    min_count=5,          # Ignore rare words
    workers=4,            # Parallel training
    sg=1,                 # 1=skip-gram, 0=CBOW
    negative=5,           # Negative sampling
    epochs=5
)

# Get word vector
vector = model.wv['computer']

# Find similar words
similar = model.wv.most_similar('computer', topn=5)
# [('pc', 0.78), ('computers', 0.76), ...]

# Solve analogies
result = model.wv.most_similar(
    positive=['woman', 'king'], 
    negative=['man'],
    topn=1
)
# [('queen', 0.85)]
```

### Hyperparameters

| Parameter | Typical Value | Impact |
|-----------|---------------|--------|
| **vector_size** | 100-300 | Larger = more expressive, slower |
| **window** | 5-10 | Larger = more context, broader meaning |
| **min_count** | 5-10 | Filters rare words (noise reduction) |
| **negative** | 5-20 | More negatives = better training, slower |
| **sg** | 0 or 1 | CBOW or Skip-gram |

---

<span class="at-kicker">Evolution</span>

## From Word2Vec to Transformers

| Generation | Model | Key Innovation | Context |
|------------|-------|----------------|---------|
| **1st** | Word2Vec, GloVe | Distributed representations | Fixed per word |
| **2nd** | ELMo | Contextualized (LSTM-based) | Sentence-level |
| **3rd** | BERT, GPT | Deep bidirectional/autoregressive | Full context |
| **4th** | GPT-3/4, PaLM | Scale + prompt engineering | Task-agnostic |

> [!info] Why Word2Vec still matters
> - **Efficiency**: Fast inference, small memory footprint
> - **Interpretability**: Clear vector arithmetic
> - **Foundation**: Understanding embeddings helps with modern methods
> - **Baselines**: Still competitive for some tasks

---

<span class="at-kicker">Best Practices</span>

## Using Word2Vec Effectively

> [!tip] Training your own
> 1. **Corpus size**: More data = better embeddings (millions of sentences)
> 2. **Domain match**: Train on domain-specific text for specialized tasks
> 3. **Preprocessing**: Consistent tokenization, handle OOV words
> 4. **Dimensions**: 200-300 for general use, 50-100 for limited data

> [!tip] Using pre-trained
> - **Google News**: 300-dim, 3 billion words, general English
> - **FastText**: Handles subwords, better for morphologically rich languages
> - **Domain-specific**: BioWord2Vec (medical), LegalWord2Vec (law)

> [!warning] Limitations
> - **Polysemy**: "bank" (river) and "bank" (financial) have same vector
> - **Out-of-vocabulary**: No representation for unseen words
> - **Static**: Same vector regardless of context

---

<span class="at-kicker">Interview Questions</span>

## Interview Questions

1. What is the difference between CBOW and Skip-Gram?
2. Why does Word2Vec use negative sampling?
3. How does Word2Vec capture semantic relationships?
4. What is the geometric interpretation of word analogies?
5. What are the limitations of Word2Vec compared to BERT?
6. How would you handle OOV words with Word2Vec?
7. When would you train your own embeddings vs. use pre-trained?

---

## Related pages

> [!grid]
>
>> [!card] Embeddings
>> [[glove|GloVe]] · [[fasttext|FastText]] · [[doc2vec|Doc2Vec]] · [[sentence-bert|Sentence-BERT]]
>
>> [!card] Modern NLP
>> [[../deep-learning/bert|BERT]] · [[../deep-learning/gpt|GPT]] · [[../deep-learning/transformers|Transformers]]
>
>> [!card] Fundamentals
>> [[nlp-fundamentals|NLP Fundamentals]] · [[../statistics/probability-distributions|Distributions]]
>
>> [!card] Applications
>> [[named-entity-recognition|NER]] · [[sentiment-analysis|Sentiment Analysis]] · [[text-classification|Text Classification]]
