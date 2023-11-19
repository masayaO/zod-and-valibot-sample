import { z } from "zod";

const emailSchema = z
  .string()
  .min(1, { message: "入力が必須の項目です" })
  .max(255, { message: "255文字以内で入力してください" })
  .email({ message: "メールアドレスの形式で入力してください" });

const telephoneSchema = z
  .string()
  .min(1, { message: "電話番号を入力してください" })
  .max(11, { message: "入力値が長すぎます" });

const givenNameSchema = z
  .string()
  .min(1, { message: "入力が必須の項目です" })
  .max(20, { message: "入力値が長すぎます" });

const lastNameSchema = z
  .string()
  .min(1, { message: "入力が必須の項目です" })
  .max(20, { message: "入力値が長すぎます" });

const organizationNameSchema = z
  .string()
  .min(1, { message: "入力が必須の項目です" })
  .max(50, { message: "入力値が長すぎます" });

const messageSchema = z
  .string()
  .min(1, { message: "入力が必須の項目です" })
  .max(4098, { message: "入力値が長すぎます" });

const agreeSchema = z.boolean().refine((val) => val, {
  message: "同意が必要です",
});

export const ContactSchema = z.object({
  email: emailSchema,
  telephone: telephoneSchema,
  givenName: givenNameSchema,
  lastName: lastNameSchema,
  organizationName: organizationNameSchema,
  message: messageSchema,
  agree: agreeSchema,
});

export type ContactType = z.infer<typeof ContactSchema>;
