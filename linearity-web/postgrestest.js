const { Client } = require('pg');

async function send_query(client, id) {
	const res = await client.query("SELECT * FROM groups WHERE id=$1", [id]);
	console.table(res.rows)
	console.log(res.rows[0]);
}

async function connect_to_db() {
	const client = new Client({
		host: "localhost",
		port: 5432,
		user: "linappdb",
		password: process.env.DB_PASSWORD
	});

	await client.connect();
	
	await send_query(client, 123);
	await send_query(client, 456);
	await send_query(client, 789);
	await send_query(client, 999);

	await client.end();
}

connect_to_db();