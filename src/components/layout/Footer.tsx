'use client';
import React from 'react';
import Link from 'next/link';
import { FaVk, FaTelegram, FaGithub, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">О проекте</h3>
            <p className="text-muted-foreground mb-4">
              Этот проект посвящен сохранению памяти о Великой Отечественной Войне, 
              ее героях и важных исторических событиях.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/nam0er1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent"
                aria-label="Телеграм"
              >
                <FaTelegram size={24} />
              </a>
              <a 
                href="https://github.com/moontify/vov-h" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-muted-foreground hover:text-accent">
                  История
                </Link>
              </li>
              <li>
                <Link href="/heroes" className="text-muted-foreground hover:text-accent">
                  Галерея героев
                </Link>
              </li>
              <li>
                <Link href="/interactive" className="text-muted-foreground hover:text-accent">
                  Тесты
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-muted-foreground hover:text-accent">
                  Материалы
                </Link>
              </li>
            </ul>
          </div>
          <div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Проект &quot;Великая Отечественная Война - Помним и гордимся&quot;. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
} 