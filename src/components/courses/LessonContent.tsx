import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function LessonContent({ markdown }: { markdown: string }) {
  return (
    <div className="lesson-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mt-12 mb-4 pb-3 border-b border-black/10 dark:border-white/10 font-display text-xl sm:text-2xl font-bold tracking-wide text-foreground first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-8 mb-3 font-heading text-lg sm:text-xl font-bold text-foreground">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-6 mb-2 font-heading text-base sm:text-lg font-bold text-foreground">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-sm sm:text-base leading-relaxed text-foreground-secondary">
              {children}
            </p>
          ),
          strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
          ul: ({ children }) => (
            <ul className="mb-4 ml-1 flex flex-col gap-1.5 pl-4 text-sm sm:text-base leading-relaxed text-foreground-secondary marker:text-primary">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 ml-1 flex flex-col gap-1.5 list-decimal pl-4 text-sm sm:text-base leading-relaxed text-foreground-secondary marker:text-primary marker:font-semibold">
              {children}
            </ol>
          ),
          li: ({ children, className }) => (
            <li className={`leading-relaxed ${className ?? "list-disc"}`}>{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-4 rounded-r-2xl border-l-4 border-primary/40 bg-primary-soft/60 px-4 py-3 text-sm sm:text-base leading-relaxed text-foreground">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-8 border-black/10 dark:border-white/10" />,
          a: ({ children, href }) => (
            <a
              href={href}
              className="font-medium text-primary underline decoration-primary/40 underline-offset-2 hover:text-primary-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          input: ({ checked, disabled }) => (
            <input
              type="checkbox"
              checked={!!checked}
              disabled={disabled}
              readOnly
              className="mr-2 accent-primary"
            />
          ),
          table: ({ children }) => (
            <div className="my-4 overflow-x-auto rounded-2xl border border-black/[0.08] dark:border-white/[0.1]">
              <table className="w-full text-left text-xs sm:text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-surface-subtle">{children}</thead>,
          th: ({ children }) => (
            <th className="whitespace-nowrap border-b border-black/[0.08] px-3 py-2.5 sm:px-4 font-bold text-foreground dark:border-white/[0.1]">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-black/[0.05] px-3 py-2.5 sm:px-4 text-foreground-secondary dark:border-white/[0.05]">
              {children}
            </td>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
