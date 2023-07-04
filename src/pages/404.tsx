import * as React from "react"
import type { HeadFC, PageProps } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => {
      return <div>404 - TODO</div>;
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not Found</title>;
