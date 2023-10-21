# Tokens Metadata

## Team Token
A main token to trade.

It's used to buy rewards or individual benefits (e.g. day off)

**tokenId MUST be zero 0**

### attributes

##### name *required*
Token name (ERC20)

e.g. "My team token",

##### symbol *required*
Token ticker (ERC20)

e.g. "MTT"

##### decimals *required*
Number of decimals (ERC20)

This attribute is used to calculate the number of tokens. 

e.g. 6 -> 1000000000 = 1.000,000000

##### image *required*
Token Image

e.g. "https://game.example/item-id-8u5h2m.png"

## Milestone
It's used to register a team/individual milestone (something that only happens one time and will not evolve).

e.g. Achieve 2023 goals

### attributes

##### name *required*
Milestone name

e.g. Agile

##### description *required*
Milestone description

e.g. Create and complete 1 course as a lecturer

##### image *required*
Milestone Image

e.g. "https://game.example/item-id-8u5h2m.png"

##### team_token_reward *optional*
how many rewards (team tokens) who achieve this milestone will wins.

e.g. 10000

##### data *optional*
some extra data.

e.g. 

{
    "course": "course name",
    "participants": 10
}


## Job
It's used to register a team/individual job (something that you have to do more than once to achieve max level)

e.g. Complete tasks on Agile platform

### attributes

##### name *required*
Job name

e.g. Agile

##### description *required*
Job description

e.g. Complete tasks on Agile platform

##### maxLevel *required*
max level of this job.

e.g. 5

##### level *required*
level of this job (tokenId).

e.g. 1

##### amountToComplete *required*
How many tokens do you MUST have to achieve the level of this job (tokenId).

e.g. 10

##### image *required*
Job Image

e.g. "https://game.example/item-id-8u5h2m.png"

##### team_token_reward *optional*
how many rewards (team tokens) who achieve this milestone will wins.

e.g. 100

### Levels
- brass     (1)
- bronze    (2)
- plate     (3)
- gold      (4)
- diamond   (5)
