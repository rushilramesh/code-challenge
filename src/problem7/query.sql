SELECT
    usd_address
FROM
    (
        SELECT
            address,
            SUM(
                CASE
                    WHEN denom = 'usdc' THEN amount * 0.000001
                    WHEN denom = 'swth' THEN amount * 0.00000005
                    WHEN denom = 'tmz' THEN amount * 0.003
                END
            ) AS usd_balance
        FROM
            balances
            INNER JOIN trades USING(address)
        WHERE
            block_height > 730000
        GROUP BY
            address
    ) AS usd_addresses
WHERE
    usd_address.usd_balance >= 500