CREATE TYPE customer_support.query_type AS ENUM (
  'complain', 'query', 'feedback'
);

CREATE TYPE customer_support.query_status AS ENUM (
'initiated', 'in_process', 'on_hold', 'pending_customer', 'pending_merchant', 'resolved', 'rejected'
);

CREATE TABLE customer_support.query (
  id SERIAL NOT NULL,
  type customer_support.query_type NOT NULL,
  user_id uuid NOT NULL references user_account.users (id),
  order_id integer references orders.order (id),
  priority integer NOT NULL  default 0,
  status customer_support.query_status NOT NULL,
  level integer NOT NULL default 0,
  assignee uuid references user_account.users (id),
  created_at timestamptz NOT NULL default now(),
  updated_at timestamptz NOT NULL default now()
);

CREATE TABLE customer_support.query_history (
  query_id integer NOT NULL,
  priority integer NOT NULL,
  status customer_support.query_status NOT NULL,
  level integer NOT NULL default 0,
  assignee uuid NOT NULL,
  notes text,
  created_at timestamptz NOT NULL default now()
);

CREATE TABLE customer_support.feedback (
  id SERIAL NOT NULL,
  user_id uuid NOT NULL references user_account.users (id),
  order_id integer NOT NULL references orders.order (id),
  ratings jsonb,
  comment text,
  created_at timestamptz NOT NULL default now(),
  updated_at timestamptz default now()
);
