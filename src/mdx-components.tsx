import type { MDXComponents } from "mdx/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    table: Table,
    thead: TableHeader,
    tbody: TableBody,
    tr: TableRow,
    th: TableHead,
    td: TableCell,
  };
}
