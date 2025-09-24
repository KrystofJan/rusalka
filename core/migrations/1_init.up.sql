create database "rusalka-dev";

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
    id bigint GENERATED ALWAYS AS IDENTITY,
    email text not null,
    first_name text not null,
    last_name text not null,
    role role not null default 'user',
    profile_pic_url text,
    phone_number text
);

create table projects (
    id bigint GENERATED ALWAYS AS IDENTITY,
    title text not null,
    description text not null,
    github_repo text not null,
    public boolean not null default true
);

INSERT INTO accounts (
    email, first_name, last_name, role
) VALUES ( 
    'jendazah@gmail.com', 'Jan-Krystof', 'Kujel Zahradnik', 'admin' 
)
