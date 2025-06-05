const Layout = () => import("@/layout/index.vue");

export default {
  path: "/upload",
  name: "Upload",
  component: Layout,
  redirect: "/upload/index",
  meta: {
    icon: "ep/upload",
    title: "文件上传",
    rank: 11
  },
  children: [
    {
      path: "/upload/index",
      name: "UploadDemo",
      component: () => import("@/views/upload/index.vue"),
      meta: {
        title: "上传文件"
      }
    }
  ]
} satisfies RouteConfigsTable;
