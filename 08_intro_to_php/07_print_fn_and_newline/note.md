# Different Environments Will Interpret Content Differently

- The way you structure content depends on where the PHP is interpreted!

## Environment

| PHP output consumed by | Appropriate approach                     |
| ---------------------- | ---------------------------------------- |
| Browser / HTML         | `<br>`, `<p>`, `<div>`, etc.             |
| Terminal               | `\n`                                     |
| `.txt` file            | `\n`                                     |
| JSON API               | JSON formatting / `\n` where appropriate |
| CSV                    | CSV line endings                         |
| HTML email             | HTML markup                              |
| Plain-text email       | `\n`                                     |
