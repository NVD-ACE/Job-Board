import { pgTable, varchar, timestamp } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"
import { JobListingTable } from "./jobListing"
import { OrganizationUserSettingsTable } from "./organizationUserSettings"

export const OrganizationTable = pgTable("organizations", {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
})

export const organizationRelations = relations(
  OrganizationTable,
  ({ many }) => ({
    jobListings: many(JobListingTable),
    organizationUserSettings: many(OrganizationUserSettingsTable),
  })
)
