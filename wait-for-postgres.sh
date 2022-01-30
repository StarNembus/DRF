#!/bin/sh

set -e

host="$1"
shift
cmd="$@"



until  PGPASSWORD="52669" psql -h "$host" -d "DRF" -U 'kwazart' -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec $cmd

