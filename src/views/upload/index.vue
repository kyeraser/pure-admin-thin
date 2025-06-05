<script setup lang="ts">
import { uploadFile } from "@/api/upload";
import { message } from "@/utils/message";

defineOptions({ name: "UploadDemo" });

function handleUpload(options: any) {
  const formData = new FormData();
  formData.append("file", options.file);
  uploadFile(formData)
    .then(() => {
      message("上传成功", { type: "success" });
      options.onSuccess && options.onSuccess(null);
    })
    .catch(() => {
      message("上传失败", { type: "error" });
      options.onError && options.onError(new Error("upload error"));
    });
}
</script>

<template>
  <el-upload :http-request="handleUpload" list-type="text">
    <el-button type="primary">上传文件</el-button>
  </el-upload>
</template>
