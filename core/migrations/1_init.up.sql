CREATE TABLE address (
    id           bigserial PRIMARY KEY,
    street_line1 text        NOT NULL,
    street_line2 text,
    city         text        NOT NULL,
    state        text,
    postal_code  text,
    country      text        NOT NULL DEFAULT 'US',
    created_at   timestamptz NOT NULL DEFAULT now(),
    updated_at   timestamptz NOT NULL DEFAULT now()
);

CREATE TYPE role AS ENUM ('admin', 'user', 'customer');

create table accounts (
    id text not null PRIMARY KEY,
    first_name text not null,
    last_name text not null,
    role role not null default 'user',
    profile_pic_url text,
    phone_number text
);

CREATE TYPE showcase_type AS ENUM ('none', 'external', 'embeded');
CREATE TYPE project_type AS ENUM ('school', 'commertial', 'work', 'personal');

create table projects (
    id UUID PRIMARY KEY,
    title text not null,
    description text not null,
    github_repo text,
    showcase_type showcase_type not null default 'none',
    type project_type not null default 'personal',
    public boolean not null default true
);

