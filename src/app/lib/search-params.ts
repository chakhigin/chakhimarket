import { createSearchParamsCache, parseAsFloat, parseAsInteger, parseAsString, parseAsStringLiteral } from "nuqs/server";

const sortOrder = ['asc', 'desc'] as const

export const searchParamsCache = createSearchParamsCache({
    orderBy: parseAsStringLiteral(sortOrder),
    page: parseAsString
});

export type ParsedSearchParams = ReturnType<typeof searchParamsCache.parse>