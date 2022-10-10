import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Breadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split('?')[0];
    let pathArray = pathWithoutQuery.split('/');
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== '');

    const breadcrumbs = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/');
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);

  return (
    <>
      <Breadcrumb separator='-'>
        <BreadcrumbItem>
          <Link href='/'>Home</Link>
        </BreadcrumbItem>
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb: any) => (
            <BreadcrumbItem key={breadcrumb.href}>
              <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            </BreadcrumbItem>
          ))}
      </Breadcrumb>
    </>
  );
};

export default Breadcrumbs;
