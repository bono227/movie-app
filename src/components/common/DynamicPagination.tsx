"use client";

import { usePagination } from "@/hooks";
import React from "react";

type DynamicPaginationProps = {
  totalPages: number;
};

export const DynamicPagination = (props: DynamicPaginationProps) => {
  const { totalPages } = props;
  const {
    handleNext,
    handlePrevious,
    handlePageChange,
    currentPageNumber,
    maxPage,
    pageNumbers,
  } = usePagination(totalPages);

  return <div>DynamicPagination</div>;
};
