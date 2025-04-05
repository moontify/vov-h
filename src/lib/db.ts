import { sql } from '@vercel/postgres';import { Hero } from '@/types';interface DbHero {  id: number;  name: string;  rank: string | null;  region: string | null;  description: string | null;  years: string | null;  photo: string | null;  created_at?: Date;}export async function initDatabase() {  try {    await sql`      CREATE TABLE IF NOT EXISTS heroes (        id SERIAL PRIMARY KEY,        name VARCHAR(255) NOT NULL,        rank VARCHAR(100),        region VARCHAR(100),        description TEXT,        years VARCHAR(50),        photo VARCHAR(255),        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP      );    `;    await sql`      CREATE TABLE IF NOT EXISTS awards (        id SERIAL PRIMARY KEY,        hero_id INTEGER REFERENCES heroes(id) ON DELETE CASCADE,        name VARCHAR(255) NOT NULL      );    `;    console.log('База данных инициализирована');    return { success: true };  } catch (error) {    console.error('Ошибка при инициализации базы данных:', error);    return { success: false, error };  }}export async function addHeroAwards(heroId: number, awards: string[]) {  const values = awards.map((award) => {    return {      hero_id: heroId,      name: award.trim()    };  });  if (values.length === 0) return;  try {    for (const value of values) {      await sql`        INSERT INTO awards (hero_id, name)        VALUES (${value.hero_id}, ${value.name});      `;    }  } catch (error) {    console.error('Ошибка при добавлении наград:', error);    throw error;  }}export async function getHeroAwards(heroId: number) {  try {    const { rows } = await sql`      SELECT name FROM awards      WHERE hero_id = ${heroId};    `;    return rows.map(row => row.name);  } catch (error) {    console.error('Ошибка при получении наград:', error);    return [];  }}export function mapDbHeroToHero(dbHero: DbHero, awards: string[]): Hero {  return {    id: dbHero.id,    name: dbHero.name,    rank: dbHero.rank || '',    region: dbHero.region || '',    description: dbHero.description || '',    years: dbHero.years || '',    photo: dbHero.photo || '/images/heroes/placeholder.jpg',    awards: awards  };} 