# Leetcode Practice - SQL - Postgres

## 183. Customers Who Never Order

### Link

https://leetcode.com/problems/customers-who-never-order/description/

### Problem

Write a solution to find all customers who never order anything.

Return the result table in any order.

The result format is in the following example.

### Solution

```postgresql
select name as "Customers"
from customers c
left join orders o on o.customerId = c.id
where o.customerId is null

-- select name as "Customers"
-- from customers c
-- where not exists (
--     select 1
--     from orders o
--     where o.customerId = c.id
-- )

-- select name as "Customers"
-- from customers c
-- where c.id not in (
--     select customerId
--     from orders
-- )
```
