import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  imports: [CommonModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {
  faqs = [
    {
      question: "🌱 What is Planet Green Infra's organic promise?",
      answer: "We grow 100% certified organic crops using natural techniques and ensure sustainability at every stage.",
      open: true
    },
    {
      question: "🚚 How is GreenLand Capital produce delivered?",
      answer: "Our products are harvested fresh and delivered to your doorstep within 24 hours in eco-safe packaging.",
      open: false
    },
    {
      question: "💳 What payment methods do you support?",
      answer: "We accept UPI, credit/debit cards, online banking, and cash on delivery.",
      open: false
    },
    {
      question: "🍀 Why choose us over others?",
      answer: "We guarantee transparency, natural cultivation, biodegradable packaging, and strict quality control.",
      open: false
    },
    {
      question: "📦 How can I track my order?",
      answer: "You’ll receive a tracking link via SMS and email after placing your order.",
      open: false
    }
  ];

  toggleFAQ(index: number) {
    this.faqs.forEach((faq, i) => {
      faq.open = i === index ? !faq.open : false;
    });
  }
}
