import { boolean, pgTable, varchar, timestamp } from "drizzle-orm/pg-core"
import { UserTable } from "./user"
import { relations } from "drizzle-orm"

export const UserNotificationSettingsTable = pgTable(
  "user_notification_settings",
  {
    userId: varchar()
      .primaryKey()
      .references(() => UserTable.id),
    newJobEmailNotifications: boolean().notNull().default(false),
    aiPrompt: varchar(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  }
)

export const userNotificationSettingsRelations = relations(
  UserNotificationSettingsTable,
  ({ one }) => ({
    user: one(UserTable, {
      fields: [UserNotificationSettingsTable.userId],
      references: [UserTable.id],
    }),
  })
)
