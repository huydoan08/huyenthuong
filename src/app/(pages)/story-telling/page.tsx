"use client";
import { useState } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { ExpandableCard } from "@/app/component/ExpandableCard/ExpandableCard";
import { storyTelling } from "./data";
import { Card } from "@/components/ui/card";

export default function RSIPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (sidebar === undefined) return null;

  return (
    <ContentLayout title="Những mẩu chuyện hay sưu tầm">
      <Card className="bg-card border border-[#e5e7eb] dark:border-[#222] rounded-xl">
        {storyTelling.map((faq, index) => (
          <ExpandableCard
            key={index}
            title={faq.title}
            content={faq.content}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            isFirst={index === 0}
            isLast={index === storyTelling.length - 1}
          />
        ))}
      </Card>
    </ContentLayout>
  );
}
