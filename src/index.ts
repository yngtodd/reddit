import { MikroORM } from "@mikro-orm/core";

const main = async () => {
  const orm = await MikroORM.init({
		dbName: 'reddit',
		type: 'postgresql',
		user: 'postgres',
		password: 'postgres',
		debug: process.env.NODE_ENV !== 'production',
	});

  console.log("Hello world!!");
};

main();

