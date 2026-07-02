/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Truck, MessageSquare, Ruler, UserCheck, CreditCard, Lock } from "lucide-react";
import { BENEFITS_PRIMARY, BENEFITS_SECONDARY } from "../data";

interface BenefitsProps {
  highContrast: boolean;
  type: "primary" | "secondary";
}

// Icon helper mapping string to lucide component
function BenefitIcon({ name, className }: { name: string; className: string }) {
  switch (name) {
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    case "Truck":
      return <Truck className={className} />;
    case "MessageSquare":
      return <MessageSquare className={className} />;
    case "Ruler":
      return <Ruler className={className} />;
    case "UserCheck":
      return <UserCheck className={className} />;
    case "CreditCard":
      return <CreditCard className={className} />;
    case "Lock":
      return <Lock className={className} />;
    default:
      return <ShieldCheck className={className} />;
  }
}

export default function Benefits({ highContrast, type }: BenefitsProps) {
  if (type === "primary") {
    return (
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className={`py-8 md:py-12 px-4 border-b ${
          highContrast ? "bg-black text-white border-white" : "bg-slate-50"
        }`}
        aria-label="Nossos Diferenciais Principais"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS_PRIMARY.map((benefit, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl border flex flex-col md:flex-row gap-5 items-start transition-all duration-300 ${
                  highContrast 
                    ? "bg-black border-white text-white" 
                    : "bg-white border-slate-100 hover:border-brand-blue/30 shadow-sm hover:shadow-md"
                }`}
              >
                <div className={`p-4 rounded-xl shrink-0 ${
                  highContrast ? "bg-white text-black" : "bg-brand-blue/10 text-brand-blue"
                }`}>
                  <BenefitIcon name={benefit.iconName} className="w-8 h-8" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    highContrast ? "text-yellow-300" : "text-slate-900 font-display"
                  }`}>
                    {benefit.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  }

  // Secondary Benefits (4 Column)
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`py-10 md:py-16 px-4 border-t border-b ${
        highContrast ? "bg-black text-white border-white" : "bg-slate-50/50"
      }`}
      aria-label="Por que escolher a Nova's Persianas"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={`text-2xl md:text-4xl font-extrabold mb-3 font-display uppercase tracking-tight ${
            highContrast ? "text-yellow-300" : "text-slate-900"
          }`}>
            Nossos Compromissos de Qualidade
          </h2>
          <p className="text-base text-slate-600 font-medium">
            Entregamos um atendimento transparente, seguro e com respeito absoluto pelo seu orçamento e tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS_SECONDARY.map((benefit, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border flex flex-col gap-4 text-center items-center transition-all duration-300 ${
                highContrast 
                  ? "bg-black border-white text-white" 
                  : "bg-white border-slate-100 hover:border-brand-blue/30 hover:shadow-md shadow-sm"
              }`}
            >
              <div className={`p-3 rounded-full ${
                highContrast ? "bg-white text-black" : "bg-brand-blue/10 text-brand-blue"
              }`}>
                <BenefitIcon name={benefit.iconName} className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold ${
                highContrast ? "text-yellow-300" : "text-slate-900 font-display"
              }`}>
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
