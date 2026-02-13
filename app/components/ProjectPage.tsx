"use client";

import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";
import type { StaticImageData } from "next/image";
import Image from "next/image";

function ProjectImage({
  src,
  alt,
}: {
  src: string | StaticImageData;
  alt: string;
}) {
  const [imageError, setImageError] = useState(false);

  const hasSrc = typeof src === "string" ? src !== "" : !!src;

  if (!hasSrc || imageError) {
    return (
      <div className="w-full h-36 sm:h-40 md:h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 text-slate-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full h-36 sm:h-40 md:h-48">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string | StaticImageData;
  links?: readonly {
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  links,
  className,
}: Props) {
  return (
    <div
      className={`group flex flex-col h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 ${className || ""}`}
    >
      {/* Image Section */}
      <div className="relative shrink-0 overflow-hidden">
        {href ? (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <ProjectImage src={image || ""} alt={title} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        ) : (
          <div className="block">
            <ProjectImage src={image || ""} alt={title} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        {links && links.length > 0 && (
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex flex-wrap gap-1.5 sm:gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1 text-[10px] sm:text-xs bg-slate-900/90 backdrop-blur-sm text-white hover:bg-violet-600 border border-slate-700 hover:border-violet-500 transition-colors"
                  variant="default"
                >
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-3 sm:p-4 md:p-6 flex flex-col gap-2 sm:gap-3 md:gap-4 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-violet-400 transition-colors">
              {title}
            </h3>
            <time className="text-[10px] sm:text-xs text-slate-500 font-medium">
              {dates}
            </time>
          </div>
          {href ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-violet-400 hover:bg-slate-800 transition-all"
              aria-label={`Open ${title}`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
            </Link>
          ) : (
            <div
              className="p-2 rounded-lg bg-slate-800/50 text-slate-600 cursor-not-allowed"
              aria-label={`No link available for ${title}`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
            </div>
          )}
        </div>

        <div className="text-xs sm:text-sm flex-1 text-slate-400 leading-relaxed line-clamp-3">
          <Markdown>{description}</Markdown>
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[10px] sm:text-xs font-medium bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-violet-600/20 hover:text-violet-300 hover:border-violet-500/50 transition-colors px-2 sm:px-3 py-0.5 sm:py-1"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectsSection({ projects }: { projects: Props[] }) {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 max-w-2xl">
            A collection of projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects?.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
