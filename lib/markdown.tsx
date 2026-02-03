import React from "react";

function parseMarkdown(content: string): React.ReactNode[] {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key++} className="blog-list">
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  const parseInline = (text: string): string => {
    return text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>");
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "---") {
      flushList();
      elements.push(<hr key={key++} className="blog-hr" />);
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={key++} className="blog-h3" dangerouslySetInnerHTML={{ __html: parseInline(trimmed.slice(4)) }} />
      );
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={key++} className="blog-h2" dangerouslySetInnerHTML={{ __html: parseInline(trimmed.slice(3)) }} />
      );
      continue;
    }

    if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
      continue;
    }

    flushList();

    if (trimmed) {
      elements.push(
        <p key={key++} className="blog-p" dangerouslySetInnerHTML={{ __html: parseInline(trimmed) }} />
      );
    }
  }

  flushList();
  return elements;
}

export function MarkdownContent({ content }: { content: string }) {
  return <div className="blog-content">{parseMarkdown(content)}</div>;
}
