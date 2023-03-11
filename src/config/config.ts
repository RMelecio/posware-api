import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    apikey: process.env.API_KEY,
    jwtSecret: process.env.JWT_SECRET,
    general: {
      port: process.env.PORT,
    },
    database: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      name: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
  };
});
