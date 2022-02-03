
-- number of users

SELECT "role", count(*) FROM "Users" GROUP BY "role";


--New Year's promotion

WITH "cashback" AS (
    SELECT "userId", (SUM("prize") * 0.1) AS "cash_sum" 
    FROM "Contests" 
    WHERE "createdAt" 
        BETWEEN '2022-02-02' AND '2022-03-02' 
    GROUP BY "userId"
)
UPDATE "Users" 
    SET "balance" = ("balance" + "cashback"."cash_sum")
    FROM "cashback"
    WHERE ("role" = 'customer') AND ("Users"."id" = "cashback"."userId")
; 
UPDATE "Banks" 
    SET "balance" = ("balance" - (
        SELECT (SUM("prize") * 0.1) 
        FROM "Contests"
    ))
    WHERE "name" = 'SquadHelp'
; 

-- encouragement of creators

UPDATE "Banks" 
    SET "balance" = ("balance" - 30)
    WHERE "name" = 'SquadHelp'
; 
UPDATE "Users" 
    SET "balance" = ("balance" + 10)
    WHERE "rating" IN (
        SELECT "rating" 
        FROM "Users"
        WHERE "role" = 'creator'
        ORDER BY "rating" DESC
        LIMIT 3
    ) 
; 
