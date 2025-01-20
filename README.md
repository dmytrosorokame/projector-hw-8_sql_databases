# Projector HSA Home work #8: SQL Databases

## To run the project:

```bash
$ docker-compose up
```

### Wait for the database data provisioning of 40M users

#### You can configure the number of users in the `docker-compose.yml` file by BULK_COUNT and USERS_PER_BULK_COUNT variables

## Testing:

### Test #1: SELECT without index/with b-tree index/ with hash index

### Command:

```bash
SELECT * FROM users WHERE date_of_birth BETWEEN '1990-01-01' AND '1990-01-02' LIMIT 100;
```

### Results:

```bash
SELECT TIME -> results/select-time.txt
EXPLAIN –> results/explain.txt
EXPLAIN ANALYZE -> results/explain-analyze.txt
```

### Test #2: Insert speed with different **innodb_flush_log_at_trx_commit** settings

```bash
chmod +x ./scripts/siege.sh
./scripts/siege.sh
```

<!-- 40542667 -->
