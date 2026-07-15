---
name: code-review-checklist
description: Code review guidelines covering code quality, security, and best practices.
allowed-tools: Read, Glob, Grep
---
> ?? **DIRETRIZ GLOBAL (CABELO SEM FORMOL):** 
> Todas as instruções abaixo devem ser executadas e comunicadas EXCLUSIVAMENTE em **Português do Brasil (pt-BR)**.
> O contexto absoluto do seu trabalho é o projeto **"Cabelo Sem Formol"** — um blog de SEO focado em jornalismo investigativo, química capilar (progressivas sem formol) e monetização via Amazon.
> Aja de forma alinhada ao E-E-A-T: nunca alucine dados médicos ou químicos, consulte sempre a Anvisa.

# Code Review Checklist

## Quick Review Checklist

### Correctness
- [ ] Code does what it's supposed to do
- [ ] Edge cases handled
- [ ] Error handling in place
- [ ] No obvious bugs

### Security
- [ ] Input validated and sanitized
- [ ] No SQL/NoSQL injection vulnerabilities
- [ ] No XSS or CSRF vulnerabilities
- [ ] No hardcoded secrets or sensitive credentials
- [ ] **AI-Specific:** Protection against Prompt Injection (if applicable)
- [ ] **AI-Specific:** Outputs are sanitized before being used in critical sinks

### Performance
- [ ] No N+1 queries
- [ ] No unnecessary loops
- [ ] Appropriate caching
- [ ] Bundle size impact considered

### Code Quality
- [ ] Clear naming
- [ ] DRY - no duplicate code
- [ ] SOLID principles followed
- [ ] Appropriate abstraction level

### Testing
- [ ] Unit tests for new code
- [ ] Edge cases tested
- [ ] Tests readable and maintainable

### Documentation
- [ ] Complex logic commented
- [ ] Public APIs documented
- [ ] README updated if needed

## AI & LLM Review Patterns (2025)

### Logic & Hallucinations
- [ ] **Chain of Thought:** Does the logic follow a verifiable path?
- [ ] **Edge Cases:** Did the AI account for empty states, timeouts, and partial failures?
- [ ] **External State:** Is the code making safe assumptions about file systems or networks?

### Prompt Engineering Review
```markdown
// âŒ Vague prompt in code
const response = await ai.generate(userInput);

// âœ… Structured & Safe prompt
const response = await ai.generate({
  system: "You are a specialized parser...",
  input: sanitize(userInput),
  schema: ResponseSchema
});
```

## Anti-Patterns to Flag

```typescript
// âŒ Magic numbers
if (status === 3) { ... }

// âœ… Named constants
if (status === Status.ACTIVE) { ... }

// âŒ Deep nesting
if (a) { if (b) { if (c) { ... } } }

// âœ… Early returns
if (!a) return;
if (!b) return;
if (!c) return;
// do work

// âŒ Long functions (100+ lines)
// âœ… Small, focused functions

// âŒ any type
const data: any = ...

// âœ… Proper types
const data: UserData = ...
```

## Review Comments Guide

```
// Blocking issues use ğŸ”´
ğŸ”´ BLOCKING: SQL injection vulnerability here

// Important suggestions use ğŸŸ¡
ğŸŸ¡ SUGGESTION: Consider using useMemo for performance

// Minor nits use ğŸŸ¢
ğŸŸ¢ NIT: Prefer const over let for immutable variable

// Questions use â“
â“ QUESTION: What happens if user is null here?
```

