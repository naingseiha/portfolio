import { Star, ThumbsUp } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Review } from "@/lib/courses";

interface ReviewsListProps {
  reviews?: Review[];
  rating?: number;
  reviewsCount?: number;
}

export function ReviewsList({
  reviews = [],
  rating = 4.9,
  reviewsCount = 120,
}: ReviewsListProps) {
  const ratingDistribution = [
    { star: 5, percentage: 92 },
    { star: 4, percentage: 6 },
    { star: 3, percentage: 2 },
    { star: 2, percentage: 0 },
    { star: 1, percentage: 0 },
  ];

  return (
    <section className="py-10 border-t border-black/5 dark:border-white/5">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl font-display">
            មតិកែលម្អ និងការវាយតម្លៃពីសិស្ស (Student Reviews)
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted">
            បទពិសោធន៍ផ្ទាល់របស់សិក្ខាកាមដែលបានបញ្ចប់វគ្គបណ្តុះបណ្តាលនេះ
          </p>
        </div>

        {/* Rating Breakdown Header */}
        <div className="mb-8 grid gap-6 rounded-[28px] border border-black/[0.08] dark:border-white/[0.1] bg-surface-subtle/50 p-6 sm:p-8 sm:grid-cols-[200px_1fr] items-center">
          <div className="flex flex-col items-center justify-center text-center sm:border-r sm:border-black/10 dark:sm:border-white/10 sm:pr-6">
            <span className="text-5xl font-extrabold text-amber-500 font-display">
              {rating.toFixed(1)}
            </span>
            <div className="mt-2 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="mt-2 text-xs font-semibold text-muted">
              ការវាយតម្លៃសរុប {reviewsCount} នាក់
            </span>
          </div>

          {/* Star bars */}
          <div className="flex flex-col gap-2">
            {ratingDistribution.map((item) => (
              <div key={item.star} className="flex items-center gap-3 text-xs">
                <div className="flex w-14 items-center gap-1 font-semibold text-foreground">
                  <span>{item.star} ផ្កាយ</span>
                </div>
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                  <div
                    className="h-full rounded-full bg-amber-400 transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="w-10 text-right font-mono text-muted">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Review Cards */}
        {reviews.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="flex flex-col justify-between rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-surface/70 p-5 shadow-2xs transition-colors hover:bg-surface"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary text-sm">
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-foreground">
                          {rev.name}
                        </span>
                        <span className="block text-xs text-muted">
                          {rev.role}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-muted">{rev.date}</span>
                  </div>

                  <div className="mt-3 flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-foreground-secondary">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[11px] text-muted">
                  <ThumbsUp size={12} className="text-primary" />
                  <span>ការវាយតម្លៃផ្ទៀងផ្ទាត់ត្រឹមត្រូវ (Verified Student)</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </FadeIn>
    </section>
  );
}
