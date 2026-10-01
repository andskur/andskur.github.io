# CLAUDE.md

See **[AGENTS.md](AGENTS.md)**. It is the single source for this repository and
is kept current; nothing is duplicated here so the two cannot drift apart.

Three things worth knowing before the first edit:

1. **Do not change copy, numbers, prices or names.** They come from the
   `andskur-core` plugin, and a conflict is reported rather than patched.
2. **Run `python3 tools/stamp.py` before publishing**, or a deploy can be
   half-applied from cache.
3. **Verify by measuring, not by looking.** This codebase has shipped several
   defects that passed a visual check.
