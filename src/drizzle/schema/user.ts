import { pgTable, varchar, timestamp } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"
import { UserResumeTable } from "./userResume"
import { UserNotificationSettingsTable } from "./userNotificationSettings"
import { OrganizationUserSettingsTable } from "./organizationUserSettings"

export const UserTable = pgTable("users", {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar().notNull(),
  email: varchar().notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
})

export const userRelations = relations(UserTable, ({ one, many }) => ({
  notificationSettings: one(UserNotificationSettingsTable),
  resume: one(UserResumeTable),
  organizationUserSettings: many(OrganizationUserSettingsTable),
}))
