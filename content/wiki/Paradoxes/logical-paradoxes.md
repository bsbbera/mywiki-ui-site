---
title: Logical Paradoxes
Created:
  - 2026-06-11
date modified: Wednesday, June 11th 2026, 12:00:00 pm
aliases: [liar-paradox, barber-paradox, russells-paradox, unexpected-hanging, sorites-paradox, raven-paradox, curry-paradox, knower-paradox, grelling-nelson-paradox, berry-paradox]
category: Paradox
tags: [Paradox, Logic, Philosophy, Mathematics, Self-Reference]
banner:
publish: true
source: https://en.wikipedia.org/wiki/List_of_paradoxes
---

<span class="at-kicker">LOGIC</span>

# Logical Paradoxes

<p class="at-lead">The tools of logic turn inward and cut the hand that wields them — self-reference, vagueness, and entailment producing contradictions we cannot dismiss.</p>

## Formal logic

> [!grid]
>
>> [!card] **Unexpected Hanging Paradox**
>> A prisoner is told they will be hanged on a surprise day during the week. By backward induction, the prisoner reasons it cannot be Friday (because Thursday night would remove the surprise), and by the same logic it cannot be Thursday, Wednesday, Tuesday, or Monday — so it cannot happen at all.
>>
>> Yet when the hangman comes on Wednesday, the hanging is genuinely unexpected. The reasoning seems sound, but reality defies it.
>>
>> An epistemic logic puzzle. Formal resolutions distinguish levels of knowledge or reject the assumption that "surprise" can be consistently formalized across all possible worlds. The prisoner's knowledge that the hanging will be a surprise undermines the very conditions that make it a surprise.
>
>> [!card] **Raven Paradox (Hempel's Ravens)**
>> The statement "All ravens are black" is logically equivalent to "All non-black things are non-ravens." Observing a green apple seems to confirm the latter and therefore the former.
>>
>> It seems absurd that a green apple should confirm anything about ravens.
>>
>> In confirmation theory and Bayesian reasoning, a green apple does provide negligible confirmation because non-black non-ravens vastly outnumber ravens, giving the evidence near-zero weight. The paradox exposes the gap between logical equivalence and evidential relevance.
>
>> [!card] **Barbershop Paradox**
>> The supposition that "if one of two simultaneous assumptions leads to a contradiction, the other assumption is also disproved" leads to paradoxical consequences.
>>
>> Disproving one limb of a dilemma does not automatically disprove the other.
>>
>> The rule is not generally valid in classical logic. Not to be confused with the [[barber-paradox|Barber paradox]].
>
>> [!card] **What the Tortoise Said to Achilles (Carroll's Paradox)**
>> To deduce a conclusion from premises, one must accept an inference rule; but to accept that rule requires another rule, leading to an infinite regress.
>>
>> Valid inference can never get started if every rule needs a meta-rule.
>>
>> Inference rules are not premises to be justified by further premises; they are the framework within which justification operates. The regress is blocked by distinguishing rules from assertions.
>
>> [!card] **Catch-22**
>> A soldier wants to be declared insane to avoid combat, but wanting to avoid combat is proof of sanity, so he cannot be declared insane.
>>
>> The condition and its negation are locked in a bureaucratic loop.
>>
>> The situation describes a logically inconsistent set of rules. Real-world loops can be broken only by changing the rules from outside the system.
>
>> [!card] **Drinker Paradox**
>> In any pub, there exists a customer such that if that customer is drinking, everybody in the pub is drinking.
>>
>> A single drinker seems to control the room.
>>
>> This is a theorem of classical logic, not a true paradox. If nobody drinks, any non-drinker satisfies the conditional vacuously. The paradox dissolves once material implication is distinguished from causal control.
>
>> [!card] **Paradox of Free Choice**
>> From "You may have coffee or tea," one wants to infer "You may have coffee" and "You may have tea," yet standard modal logic permits arbitrary inferences via disjunction introduction.
>>
>> Free choice seems to license more than formal logic allows.
>>
>> Specialized modal logics (free choice logics) add inference rules or semantics that capture permission distribution over disjunction without collapse.
>
>> [!card] **Paradox of Entailment**
>> Inconsistent premises always make an argument valid (ex contradictione quodlibet).
>>
>> From a contradiction, anything follows — making logic seem too permissive.
>>
>> In classical logic this is a feature of material implication. Relevance logics reject it by requiring that premises be genuinely relevant to the conclusion.
>
>> [!card] **Lottery Paradox**
>> In a large lottery it is reasonable to believe any particular ticket will lose, yet unreasonable to believe that no ticket will win.
>>
>> Rational belief is not closed under conjunction.
>>
>> Probabilistic accounts distinguish high probability from outright belief; each ticket belief is only a very probable opinion, not knowledge.
>
>> [!card] **Ross' Paradox**
>> Disjunction introduction seems to allow inferring arbitrary imperatives from a command — for example, from "Post the letter" to "Post the letter or burn it."
>>
>> Adding options to a command should not come for free.
>>
>> Imperative inference does not parallel assertive inference; the semantics of commands resists simple propositional extension.
>
>> [!card] **Temperature Paradox**
>> If the temperature is 90 and rising, that seems to entail that 90 is rising.
>>
>> A number cannot rise; only the temperature can.
>>
>> The paradox confuses the intensional context (the temperature, which changes) with the extensional value (90, which is static). Proper analysis distinguishes the object measured from its measure.

## Self-reference

> [!grid]
>
>> [!card] **Liar Paradox**
>> "This sentence is false." If it is true, then it is false; if it is false, then it is true.
>>
>> The canonical self-referential paradox. It undermines the assumption that every declarative sentence is either true or false.
>>
>> Alfred Tarski's resolution is a hierarchy of languages: no language can contain its own truth predicate. The liar sentence is undefined because it attempts to assert truth about itself within the same language level. Meta-languages speak the truth of object-languages, but never of themselves.
>
>> [!card] **Barber Paradox**
>> A male barber shaves all and only those men who do not shave themselves. Does he shave himself?
>>
>> Russell's popularization of his set-theoretic paradox. If he shaves himself, he doesn't; if he doesn't, he does.
>>
>> The barber is an impossible object — no such barber can exist. In formal terms, the set of all sets that do not contain themselves cannot exist, which is why axiomatic set theory forbids unrestricted comprehension. Also see [[mathematical-paradoxes]].
>
>> [!card] **Russell's Paradox**
>> Does the set of all sets that do not contain themselves contain itself?
>>
>> If it does, it doesn't; if it doesn't, it does. The paradox shakes the foundations of naive set theory.
>>
>> Also examined in [[mathematical-paradoxes]]. Resolved by type theory (every entity has a type, and a set can only contain members of a lower type) and by ZFC axioms, which restrict set formation via the axiom of separation.
>
>> [!card] **Berry Paradox**
>> "The first number not nameable in under ten words" appears to name that very number in nine words.
>>
>> A definability paradox that compresses infinity into finite description.
>>
>> Blocked by Tarski's hierarchy or by rigorously formalizing "nameable" in a specific language level. The phrase must be evaluated at a meta-level above the language it describes.
>
>> [!card] **Curry's Paradox**
>> "If this sentence is true, then Germany borders China." If the sentence is true, its antecedent is true, so Germany borders China. If false, the conditional is vacuously true, so the sentence is true after all.
>>
>> Self-referential conditionals can prove anything.
>>
>> Blocked by language-hierarchy restrictions or by denying that self-referential truth predicates can be consistently defined. Also see [[curry-paradox|Curry's paradox]].
>
>> [!card] **Knower Paradox**
>> "This sentence is not known." If it is known, it is true, so it is not known. Contradiction.
>>
>> Epistemic self-reference creates the same structure as the liar, but for knowledge instead of truth.
>>
>> Formal epistemic logic must restrict self-referential knowledge claims, or adopt a hierarchy of knowledge operators analogous to Tarski's truth hierarchy. Also see [[knower-paradox|Knower paradox]].
>
>> [!card] **Grelling–Nelson Paradox**
>> Is the word "heterological" (meaning "not applicable to itself") heterological?
>>
>> A semantic analogue of Russell's paradox applied to adjectives.
>>
>> The predicate is ill-formed at the level it tries to describe. Type-theoretic or set-theoretic stratification prevents self-application. Also see [[grelling-nelson-paradox|Grelling-Nelson paradox]].
>
>> [!card] **Bhartrhari's Paradox**
>> The claim that some things are unnameable conflicts with the fact that calling them "unnameable" names them.
>>
>> Any attempt to express the limits of language falls within language.
>>
>> The statement must be understood as a meta-linguistic claim about a specific language, not as an absolute claim stated within the same language it describes.
>
>> [!card] **Crocodile Dilemma**
>> A crocodile promises to return a child if the father correctly guesses what the crocodile will do. The father guesses the child will not be returned.
>>
>> Whatever the crocodile does, it violates its promise.
>>
>> An early liar-paradox variant. The promise is self-undermining because the condition includes a prediction about the promiser's own action. No consistent execution exists.
>
>> [!card] **Paradox of the Court**
>> A student agrees to pay his teacher after winning his first case. The teacher sues the student for payment before the student has won any case.
>>
>> If the teacher wins, the student has won his first case and must pay; if the teacher loses, the student has still not won and need not pay — yet the teacher's loss means the student has won.
>>
>> The contract is vague about what counts as "winning." Legal interpretation resolves it by treating the contract as contingent on an external victory, not on the outcome of this very suit.
>
>> [!card] **Epimenides Paradox**
>> A Cretan says: "All Cretans are liars." If true, the speaker (a Cretan) is a liar, so the statement is false.
>>
>> Self-referential nationality claims create the liar structure.
>>
>> Dissolves if we allow that some Cretans tell the truth (the statement is simply false) or if we restrict scope to avoid self-reference. It works the same way as the [[liar-paradox|Liar paradox]].
>
>> [!card] **Hilbert–Bernays Paradox**
>> If a natural number could share a name with the successor of that number, then a natural number could equal its own successor.
>>
>> Names and numbers collapse into contradiction.
>>
>> Naming functions must be injective to avoid conflating distinct numbers. In formal arithmetic, distinct numerals denote distinct numbers.
>
>> [!card] **I Know That I Know Nothing**
>> Socrates claims to know only that he knows nothing.
>>
>> If he knows that he knows nothing, he knows something.
>>
>> Interpreted charitably, Socrates lacks *substantive* knowledge (certainty about essences), not total epistemic blankness. The contradiction is rhetorical, not logical.
>
>> [!card] **Kleene–Rosser Paradox**
>> By encoding Richard's paradox in untyped lambda calculus, the calculus is shown inconsistent.
>>
>> A foundational system for computation collapses under self-reference.
>>
>> Typed lambda calculi block the paradox by stratifying terms into types, preventing the construction of self-referential functions.
>
>> [!card] **Opposite Day**
>> "It is opposite day today." If true, it is not opposite day. If false, it is a normal day, contradicting the prior statement.
>>
>> A performative self-reference that toggles its own truth value.
>>
>> The statement is unstable because its content changes the context in which it is evaluated. Treated as a fixed point, it has no consistent truth value.
>
>> [!card] **Richard's Paradox**
>> Simple English appears to define a decimal expansion in a self-contradictory way.
>>
>> Language seems able to name what it cannot name.
>>
>> The set of definable real numbers cannot be listed within the same language used to define them; the diagonal construction must occur at a higher meta-level.
>
>> [!card] **Card Paradox**
>> "The next statement is true. The previous statement is false."
>>
>> Circular reference without direct self-reference still produces contradiction.
>>
>> Both statements form an inconsistent loop. Assigning truth values requires a well-founded chain, which circular reference lacks.
>
>> [!card] **No-No Paradox**
>> Two sentences, each saying the other is not true.
>>
>> Mutual negation without self-reference still collapses.
>>
>> The pair is semantically unstable; no consistent assignment of truth values exists for the cycle.
>
>> [!card] **Pinocchio Paradox**
>> What if Pinocchio said "My nose grows now"? If true, his nose grows (but it only grows when he lies). If false, he is lying, so it should grow — making it true.
>>
>> A fictional mechanism embedded in a liar loop.
>>
>> The paradox assumes an instantaneous rule that cannot be consistently applied. In any consistent formalization, the growth condition must be evaluated at a different time scale than the utterance.
>
>> [!card] **Quine's Paradox**
>> "'Yields a falsehood when appended to its own quotation' yields a falsehood when appended to its own quotation."
>>
>> Self-reference without explicit self-reference.
>>
>> The sentence achieves self-reference via quotation and concatenation. Blocked by the same language-stratification methods that resolve the [[liar-paradox|Liar paradox]].
>
>> [!card] **Yablo's Paradox**
>> An infinite sequence of sentences, each saying all following sentences are false.
>>
>> If true, all following are false, so the next is false, meaning some later sentence is true — contradiction. If false, some following sentence is true, which implies all after it are false, creating another contradiction.
>>
>> Some argue it achieves paradox without self-reference; others dispute this. Infinitary semantics or rejecting the existence of the infinite sequence resolves it.

## Vagueness

> [!grid]
>
>> [!card] **Sorites Paradox**
>> If removing one grain from a heap leaves a heap, then by repeated single removals even one grain is a heap. But one grain is not a heap.
>>
>> No single grain makes the difference, yet the difference must happen somewhere.
>>
>> Degrees of truth (fuzzy logic) or supervaluation (there is no fact of the matter about the exact cutoff). Classical logic assumes sharp boundaries where none exist. Also see [[sorites-paradox|Sorites paradox]].
>
>> [!card] **Ship of Theseus**
>> If all parts of a ship are replaced one by one, it remains the same ship. But if the original parts are reassembled into a ship, that too seems to be the original ship.
>>
>> Two ships claim identity with the original, but identity is transitive.
>>
>> The paradox conflates functional continuity (same role, gradual repair) with material continuity (same planks). We can distinguish "same ship" as a design token or a material token, each answering the question differently.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> - [[mathematical-paradoxes]]
>> - [[philosophical-paradoxes]]
>
>> [!card] Vault links
>> - [[machine-learning]]
>> - [[probability-paradoxes]]
>> - [[science/mathematics/linear-algebra]]
