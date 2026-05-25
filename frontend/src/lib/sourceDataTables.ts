export type SourceDataColumn = {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  unique: boolean;
  defaultValue: string;
  sourceLine: string;
};

export type SourceDataTable = {
  id: string;
  sourceProject: string;
  name: string;
  displayName: string;
  framework: string;
  sourceFile: string;
  columns: SourceDataColumn[];
};

export const sourceDataTables: SourceDataTable[] = [
  {
    "id": "ai-elder-care-companion-backend-seed-js-ai-results",
    "sourceProject": "AIElderCareCompanion",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "endpoint",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100)"
      },
      {
        "name": "entity_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id VARCHAR(100)"
      },
      {
        "name": "request_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "request_payload JSONB"
      },
      {
        "name": "ai_results",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_results JSONB"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(200)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-allergies",
    "sourceProject": "AIElderCareCompanion",
    "name": "allergies",
    "displayName": "Allergies",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "allergen",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "allergen VARCHAR(255) NOT NULL"
      },
      {
        "name": "allergy_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "allergy_type VARCHAR(100)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50)"
      },
      {
        "name": "reaction",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reaction TEXT"
      },
      {
        "name": "diagnosed_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "diagnosed_date DATE"
      },
      {
        "name": "diagnosed_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "diagnosed_by VARCHAR(255)"
      },
      {
        "name": "treatment",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "treatment TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-appointments",
    "sourceProject": "AIElderCareCompanion",
    "name": "appointments",
    "displayName": "Appointments",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "doctor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "doctor_name VARCHAR(255)"
      },
      {
        "name": "specialty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialty VARCHAR(100)"
      },
      {
        "name": "appointment_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointment_date DATE"
      },
      {
        "name": "appointment_time",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointment_time TIME"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "appointment_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointment_type VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'scheduled'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-billing",
    "sourceProject": "AIElderCareCompanion",
    "name": "billing",
    "displayName": "Billing",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "service_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service_type VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(10,2)"
      },
      {
        "name": "billing_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billing_date DATE"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "insurance_covered",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "insurance_covered DECIMAL(10,2)"
      },
      {
        "name": "out_of_pocket",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "out_of_pocket DECIMAL(10,2)"
      },
      {
        "name": "payment_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "payment_status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "payment_method",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_method VARCHAR(50)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-care-plans",
    "sourceProject": "AIElderCareCompanion",
    "name": "care_plans",
    "displayName": "Care Plans",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "plan_title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plan_title VARCHAR(255)"
      },
      {
        "name": "plan_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plan_type VARCHAR(100)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "goals",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "goals TEXT"
      },
      {
        "name": "interventions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "interventions TEXT"
      },
      {
        "name": "responsible_party",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "responsible_party VARCHAR(255)"
      },
      {
        "name": "frequency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "frequency VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "review_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "review_date DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-caregiver-notes",
    "sourceProject": "AIElderCareCompanion",
    "name": "caregiver_notes",
    "displayName": "Caregiver Notes",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "caregiver_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "caregiver_name VARCHAR(255)"
      },
      {
        "name": "note_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "note_type VARCHAR(100)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'normal'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'normal'"
      },
      {
        "name": "shift",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shift VARCHAR(50)"
      },
      {
        "name": "tags",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-routes-ai-js-chat-history",
    "sourceProject": "AIElderCareCompanion",
    "name": "chat_history",
    "displayName": "Chat History",
    "framework": "SQL",
    "sourceFile": "backend/routes/ai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_id INTEGER"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role VARCHAR(20) NOT NULL"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT NOT NULL"
      },
      {
        "name": "conversation_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "conversation_id VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-cognitive-exercises",
    "sourceProject": "AIElderCareCompanion",
    "name": "cognitive_exercises",
    "displayName": "Cognitive Exercises",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "exercise_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "exercise_type VARCHAR(100)"
      },
      {
        "name": "exercise_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "exercise_name VARCHAR(255)"
      },
      {
        "name": "difficulty_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "difficulty_level VARCHAR(50)"
      },
      {
        "name": "exercise_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "exercise_date TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "duration_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_minutes INTEGER"
      },
      {
        "name": "score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score INTEGER"
      },
      {
        "name": "max_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_score INTEGER"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-daily-activities",
    "sourceProject": "AIElderCareCompanion",
    "name": "daily_activities",
    "displayName": "Daily Activities",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "activity_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "activity_name VARCHAR(255)"
      },
      {
        "name": "activity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "activity_type VARCHAR(100)"
      },
      {
        "name": "activity_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "activity_date TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "duration_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_minutes INTEGER"
      },
      {
        "name": "completion_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'completed'",
        "sourceLine": "completion_status VARCHAR(50) DEFAULT 'completed'"
      },
      {
        "name": "assistance_needed",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "assistance_needed BOOLEAN DEFAULT false"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-emergency-contacts",
    "sourceProject": "AIElderCareCompanion",
    "name": "emergency_contacts",
    "displayName": "Emergency Contacts",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "contact_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "relationship",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "relationship VARCHAR(100)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "address",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address TEXT"
      },
      {
        "name": "priority",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "priority INTEGER DEFAULT 1"
      },
      {
        "name": "is_medical_proxy",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_medical_proxy BOOLEAN DEFAULT false"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-fall-alerts",
    "sourceProject": "AIElderCareCompanion",
    "name": "fall_alerts",
    "displayName": "Fall Alerts",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50)"
      },
      {
        "name": "alert_time",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "alert_time TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "sensor_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sensor_type VARCHAR(100)"
      },
      {
        "name": "response_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "response_status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "responder_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "responder_name VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-family-messages",
    "sourceProject": "AIElderCareCompanion",
    "name": "family_messages",
    "displayName": "Family Messages",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "sender_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sender_name VARCHAR(255)"
      },
      {
        "name": "recipient_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipient_name VARCHAR(255)"
      },
      {
        "name": "subject",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject VARCHAR(255)"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'normal'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'normal'"
      },
      {
        "name": "read_status",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "read_status BOOLEAN DEFAULT false"
      },
      {
        "name": "sent_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "sent_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-routes-batch03-gaps-js-gap-features",
    "sourceProject": "AIElderCareCompanion",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/batch03Gaps.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-grocery-shopping",
    "sourceProject": "AIElderCareCompanion",
    "name": "grocery_shopping",
    "displayName": "Grocery Shopping",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "item_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_name VARCHAR(255)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "quantity",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity INTEGER"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit VARCHAR(50)"
      },
      {
        "name": "needed_by",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "needed_by DATE"
      },
      {
        "name": "dietary_note",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dietary_note VARCHAR(255)"
      },
      {
        "name": "purchased",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "purchased BOOLEAN DEFAULT false"
      },
      {
        "name": "store",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "store VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-health-monitoring",
    "sourceProject": "AIElderCareCompanion",
    "name": "health_monitoring",
    "displayName": "Health Monitoring",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "vital_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vital_type VARCHAR(100)"
      },
      {
        "name": "value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value DECIMAL(10,2)"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit VARCHAR(50)"
      },
      {
        "name": "recorded_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "recorded_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "normal_range_min",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "normal_range_min DECIMAL(10,2)"
      },
      {
        "name": "normal_range_max",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "normal_range_max DECIMAL(10,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'normal'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'normal'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-home-safety",
    "sourceProject": "AIElderCareCompanion",
    "name": "home_safety",
    "displayName": "Home Safety",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "area",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "area VARCHAR(100)"
      },
      {
        "name": "hazard_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hazard_type VARCHAR(100)"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_level VARCHAR(50)"
      },
      {
        "name": "inspection_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_date DATE"
      },
      {
        "name": "inspector_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector_name VARCHAR(255)"
      },
      {
        "name": "recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendation TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'identified'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'identified'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-housekeeping",
    "sourceProject": "AIElderCareCompanion",
    "name": "housekeeping",
    "displayName": "Housekeeping",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "task_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "task_name VARCHAR(255)"
      },
      {
        "name": "area",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "area VARCHAR(100)"
      },
      {
        "name": "frequency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "frequency VARCHAR(100)"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(255)"
      },
      {
        "name": "scheduled_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_date DATE"
      },
      {
        "name": "completed_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'normal'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'normal'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-hydration-tracking",
    "sourceProject": "AIElderCareCompanion",
    "name": "hydration_tracking",
    "displayName": "Hydration Tracking",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "drink_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "drink_type VARCHAR(100)"
      },
      {
        "name": "amount_ml",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount_ml INTEGER"
      },
      {
        "name": "recorded_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "recorded_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "daily_goal_ml",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "2000",
        "sourceLine": "daily_goal_ml INTEGER DEFAULT 2000"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-immunizations",
    "sourceProject": "AIElderCareCompanion",
    "name": "immunizations",
    "displayName": "Immunizations",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "vaccine_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vaccine_name VARCHAR(255)"
      },
      {
        "name": "vaccine_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vaccine_type VARCHAR(100)"
      },
      {
        "name": "dose_number",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dose_number INTEGER"
      },
      {
        "name": "administered_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "administered_date DATE"
      },
      {
        "name": "administered_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "administered_by VARCHAR(255)"
      },
      {
        "name": "facility",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "facility VARCHAR(255)"
      },
      {
        "name": "lot_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lot_number VARCHAR(100)"
      },
      {
        "name": "next_due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_due_date DATE"
      },
      {
        "name": "side_effects",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "side_effects TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-incident-reports",
    "sourceProject": "AIElderCareCompanion",
    "name": "incident_reports",
    "displayName": "Incident Reports",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "incident_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "incident_type VARCHAR(100)"
      },
      {
        "name": "incident_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "incident_date TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50)"
      },
      {
        "name": "witnesses",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "witnesses VARCHAR(255)"
      },
      {
        "name": "action_taken",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action_taken TEXT"
      },
      {
        "name": "reported_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reported_by VARCHAR(255)"
      },
      {
        "name": "follow_up_required",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "follow_up_required BOOLEAN DEFAULT false"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-insurance",
    "sourceProject": "AIElderCareCompanion",
    "name": "insurance",
    "displayName": "Insurance",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "provider_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider_name VARCHAR(255)"
      },
      {
        "name": "policy_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "policy_number VARCHAR(100)"
      },
      {
        "name": "group_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "group_number VARCHAR(100)"
      },
      {
        "name": "plan_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plan_type VARCHAR(100)"
      },
      {
        "name": "coverage_start",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coverage_start DATE"
      },
      {
        "name": "coverage_end",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coverage_end DATE"
      },
      {
        "name": "copay",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "copay DECIMAL(10,2)"
      },
      {
        "name": "deductible",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deductible DECIMAL(10,2)"
      },
      {
        "name": "contact_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_phone VARCHAR(50)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-legal-documents",
    "sourceProject": "AIElderCareCompanion",
    "name": "legal_documents",
    "displayName": "Legal Documents",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "document_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_type VARCHAR(100)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "attorney_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "attorney_name VARCHAR(255)"
      },
      {
        "name": "effective_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "effective_date DATE"
      },
      {
        "name": "expiration_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiration_date DATE"
      },
      {
        "name": "storage_location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "storage_location VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-meal-planning",
    "sourceProject": "AIElderCareCompanion",
    "name": "meal_planning",
    "displayName": "Meal Planning",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "meal_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meal_type VARCHAR(50)"
      },
      {
        "name": "meal_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meal_name VARCHAR(255)"
      },
      {
        "name": "meal_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meal_date DATE"
      },
      {
        "name": "calories",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "calories INTEGER"
      },
      {
        "name": "dietary_restrictions",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dietary_restrictions VARCHAR(255)"
      },
      {
        "name": "ingredients",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ingredients TEXT"
      },
      {
        "name": "preparation_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "preparation_notes TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planned'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'planned'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-medical-equipment",
    "sourceProject": "AIElderCareCompanion",
    "name": "medical_equipment",
    "displayName": "Medical Equipment",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "equipment_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment_name VARCHAR(255)"
      },
      {
        "name": "equipment_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment_type VARCHAR(100)"
      },
      {
        "name": "manufacturer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manufacturer VARCHAR(255)"
      },
      {
        "name": "serial_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serial_number VARCHAR(100)"
      },
      {
        "name": "purchase_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchase_date DATE"
      },
      {
        "name": "warranty_expiry",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warranty_expiry DATE"
      },
      {
        "name": "last_maintenance",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_maintenance DATE"
      },
      {
        "name": "next_maintenance",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_maintenance DATE"
      },
      {
        "name": "condition",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'good'",
        "sourceLine": "condition VARCHAR(50) DEFAULT 'good'"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-medical-records",
    "sourceProject": "AIElderCareCompanion",
    "name": "medical_records",
    "displayName": "Medical Records",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "record_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "record_type VARCHAR(100)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "doctor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "doctor_name VARCHAR(255)"
      },
      {
        "name": "facility",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "facility VARCHAR(255)"
      },
      {
        "name": "record_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "record_date DATE"
      },
      {
        "name": "diagnosis_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "diagnosis_code VARCHAR(50)"
      },
      {
        "name": "attachments",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "attachments TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-medications",
    "sourceProject": "AIElderCareCompanion",
    "name": "medications",
    "displayName": "Medications",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "medication_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "medication_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "dosage",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dosage VARCHAR(100)"
      },
      {
        "name": "frequency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "frequency VARCHAR(100)"
      },
      {
        "name": "time_of_day",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "time_of_day VARCHAR(100)"
      },
      {
        "name": "prescribing_doctor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prescribing_doctor VARCHAR(255)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-mood-tracking",
    "sourceProject": "AIElderCareCompanion",
    "name": "mood_tracking",
    "displayName": "Mood Tracking",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "mood",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mood VARCHAR(50)"
      },
      {
        "name": "energy_level",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "energy_level INTEGER"
      },
      {
        "name": "anxiety_level",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "anxiety_level INTEGER"
      },
      {
        "name": "social_interaction",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "social_interaction BOOLEAN DEFAULT false"
      },
      {
        "name": "recorded_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "recorded_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "triggers",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "triggers VARCHAR(255)"
      },
      {
        "name": "coping_strategies",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coping_strategies TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-physical-therapy",
    "sourceProject": "AIElderCareCompanion",
    "name": "physical_therapy",
    "displayName": "Physical Therapy",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "therapist_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "therapist_name VARCHAR(255)"
      },
      {
        "name": "exercise_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "exercise_name VARCHAR(255)"
      },
      {
        "name": "exercise_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "exercise_type VARCHAR(100)"
      },
      {
        "name": "session_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "session_date TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "duration_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_minutes INTEGER"
      },
      {
        "name": "sets",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sets INTEGER"
      },
      {
        "name": "reps",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reps INTEGER"
      },
      {
        "name": "pain_level",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pain_level INTEGER"
      },
      {
        "name": "progress_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "progress_notes TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'scheduled'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-sleep-tracking",
    "sourceProject": "AIElderCareCompanion",
    "name": "sleep_tracking",
    "displayName": "Sleep Tracking",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "sleep_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sleep_date DATE"
      },
      {
        "name": "bedtime",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bedtime TIME"
      },
      {
        "name": "wake_time",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "wake_time TIME"
      },
      {
        "name": "total_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_hours DECIMAL(4,2)"
      },
      {
        "name": "sleep_quality",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sleep_quality VARCHAR(50)"
      },
      {
        "name": "interruptions",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "interruptions INTEGER DEFAULT 0"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-social-engagement",
    "sourceProject": "AIElderCareCompanion",
    "name": "social_engagement",
    "displayName": "Social Engagement",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "activity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "activity_type VARCHAR(100)"
      },
      {
        "name": "activity_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "activity_name VARCHAR(255)"
      },
      {
        "name": "event_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_date TIMESTAMP"
      },
      {
        "name": "duration_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_minutes INTEGER"
      },
      {
        "name": "participants",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "participants VARCHAR(255)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "mood_before",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mood_before VARCHAR(50)"
      },
      {
        "name": "mood_after",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mood_after VARCHAR(50)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-telemedicine",
    "sourceProject": "AIElderCareCompanion",
    "name": "telemedicine",
    "displayName": "Telemedicine",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "doctor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "doctor_name VARCHAR(255)"
      },
      {
        "name": "specialty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialty VARCHAR(100)"
      },
      {
        "name": "session_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "session_date DATE"
      },
      {
        "name": "session_time",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "session_time TIME"
      },
      {
        "name": "duration_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_minutes INTEGER"
      },
      {
        "name": "platform",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "platform VARCHAR(100)"
      },
      {
        "name": "session_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "session_type VARCHAR(100)"
      },
      {
        "name": "diagnosis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "diagnosis TEXT"
      },
      {
        "name": "prescription",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prescription TEXT"
      },
      {
        "name": "follow_up_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "follow_up_date DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-transportation",
    "sourceProject": "AIElderCareCompanion",
    "name": "transportation",
    "displayName": "Transportation",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "pickup_location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pickup_location VARCHAR(255)"
      },
      {
        "name": "dropoff_location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dropoff_location VARCHAR(255)"
      },
      {
        "name": "pickup_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pickup_date DATE"
      },
      {
        "name": "pickup_time",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pickup_time TIME"
      },
      {
        "name": "transport_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transport_type VARCHAR(100)"
      },
      {
        "name": "wheelchair_accessible",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "wheelchair_accessible BOOLEAN DEFAULT false"
      },
      {
        "name": "companion_needed",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "companion_needed BOOLEAN DEFAULT false"
      },
      {
        "name": "driver_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "driver_name VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'scheduled'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-users",
    "sourceProject": "AIElderCareCompanion",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'caregiver'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'caregiver'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-visitor-log",
    "sourceProject": "AIElderCareCompanion",
    "name": "visitor_log",
    "displayName": "Visitor Log",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "visitor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "visitor_name VARCHAR(255)"
      },
      {
        "name": "relationship",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "relationship VARCHAR(100)"
      },
      {
        "name": "visit_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "visit_date TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "visit_duration_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "visit_duration_minutes INTEGER"
      },
      {
        "name": "purpose",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purpose VARCHAR(255)"
      },
      {
        "name": "mood_after_visit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mood_after_visit VARCHAR(50)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-elder-care-companion-backend-seed-js-wound-care",
    "sourceProject": "AIElderCareCompanion",
    "name": "wound_care",
    "displayName": "Wound Care",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "patient_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patient_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "wound_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "wound_type VARCHAR(100)"
      },
      {
        "name": "wound_location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "wound_location VARCHAR(100)"
      },
      {
        "name": "size_cm",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "size_cm DECIMAL(5,2)"
      },
      {
        "name": "stage",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stage VARCHAR(50)"
      },
      {
        "name": "treatment",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "treatment TEXT"
      },
      {
        "name": "dressing_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dressing_type VARCHAR(100)"
      },
      {
        "name": "last_changed",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_changed DATE"
      },
      {
        "name": "next_change_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_change_date DATE"
      },
      {
        "name": "healing_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'healing'",
        "sourceLine": "healing_status VARCHAR(50) DEFAULT 'healing'"
      },
      {
        "name": "caregiver_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "caregiver_name VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-hospice-care-manager-server-routes-gap-no-advance-directive-summarizer-for-care-js-gap-features",
    "sourceProject": "AIHospiceCareManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-advance-directive-summarizer-for-care.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-hospice-care-manager-server-routes-gap-no-family-meeting-agenda-generator-js-gap-features",
    "sourceProject": "AIHospiceCareManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-family-meeting-agenda-generator.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-hospice-care-manager-server-routes-gap-no-file-upload-for-advance-directives-js-gap-features",
    "sourceProject": "AIHospiceCareManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-file-upload-for-advance-directives.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-hospice-care-manager-server-routes-gap-no-medication-tracking-module-js-gap-features",
    "sourceProject": "AIHospiceCareManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-medication-tracking-module.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-hospice-care-manager-server-routes-gap-no-payment-billing-module-js-gap-features",
    "sourceProject": "AIHospiceCareManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-payment-billing-module.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-hospice-care-manager-server-routes-gap-no-standardized-painsymptom-assessment-f-js-gap-features",
    "sourceProject": "AIHospiceCareManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-standardized-painsymptom-assessment-f.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-hospice-care-manager-server-routes-gap-no-volunteer-coordination-module-js-gap-features",
    "sourceProject": "AIHospiceCareManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-volunteer-coordination-module.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-hospice-care-manager-server-routes-gap-no-volunteer-need-matching-ai-js-gap-features",
    "sourceProject": "AIHospiceCareManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-volunteer-need-matching-ai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-hospice-care-manager-server-routes-gap-no-webhook-surface-js-gap-features",
    "sourceProject": "AIHospiceCareManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-webhook-surface.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-account",
    "sourceProject": "beauty-wellness-ai",
    "name": "Account",
    "displayName": "Account",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id                String  @id @default(cuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId            String"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type              String"
      },
      {
        "name": "provider",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider          String"
      },
      {
        "name": "providerAccountId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "providerAccountId String"
      },
      {
        "name": "refresh_token",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "refresh_token     String? @db.Text"
      },
      {
        "name": "access_token",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "access_token      String? @db.Text"
      },
      {
        "name": "expires_at",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at        Int?"
      },
      {
        "name": "token_type",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "token_type        String?"
      },
      {
        "name": "scope",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scope             String?"
      },
      {
        "name": "id_token",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id_token          String? @db.Text"
      },
      {
        "name": "session_state",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "session_state     String?"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user User @relation(fields: [userId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-activity",
    "sourceProject": "beauty-wellness-ai",
    "name": "Activity",
    "displayName": "Activity",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "type",
        "type": "ActivityType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type          ActivityType"
      },
      {
        "name": "title",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title         String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "metadata",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metadata      Json?"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client        Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String"
      },
      {
        "name": "userId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId        String?"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-ai-consent",
    "sourceProject": "beauty-wellness-ai",
    "name": "AIConsent",
    "displayName": "AI Consent",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String   @id @default(cuid())"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId  String"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId    String?"
      },
      {
        "name": "userId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String?"
      },
      {
        "name": "feature",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature     String   // skin_analyzer, mental_health, symptom_checker, posture, sleep"
      },
      {
        "name": "granted",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "granted     Boolean  @default(true)"
      },
      {
        "name": "signature",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signature   String?  // base64 signature, optional"
      },
      {
        "name": "ipAddress",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ipAddress   String?"
      },
      {
        "name": "userAgent",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userAgent   String?"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-ai-loyalty-optimization",
    "sourceProject": "beauty-wellness-ai",
    "name": "AILoyaltyOptimization",
    "displayName": "AI Loyalty Optimization",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId    String"
      },
      {
        "name": "programData",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "programData   Json?"
      },
      {
        "name": "memberData",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "memberData    Json?"
      },
      {
        "name": "transactionData",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactionData Json?"
      },
      {
        "name": "programSuggestions",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "programSuggestions Json?"
      },
      {
        "name": "rewardOptimizations",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rewardOptimizations Json?"
      },
      {
        "name": "engagementStrategies",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "engagementStrategies Json?"
      },
      {
        "name": "retentionTactics",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retentionTactics Json?"
      },
      {
        "name": "projectedROI",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectedROI  Decimal?  @db.Decimal(10, 2)"
      },
      {
        "name": "projectedRetention",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectedRetention Decimal? @db.Decimal(5, 2)"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-ai-product-recommendation",
    "sourceProject": "beauty-wellness-ai",
    "name": "AIProductRecommendation",
    "displayName": "AI Product Recommendation",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String?"
      },
      {
        "name": "skinType",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "skinType      String?"
      },
      {
        "name": "hairType",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hairType      String?"
      },
      {
        "name": "concerns",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "concerns      String[]"
      },
      {
        "name": "allergies",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "allergies     String[]"
      },
      {
        "name": "budget",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget        String?"
      },
      {
        "name": "preferences",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "preferences   Json?"
      },
      {
        "name": "products",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "products      Json?     // Array of recommended products"
      },
      {
        "name": "routines",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "routines      Json?     // Daily/weekly routines"
      },
      {
        "name": "alternatives",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alternatives  Json?     // Budget-friendly alternatives"
      },
      {
        "name": "purchased",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchased     String[]  // Product IDs purchased"
      },
      {
        "name": "rating",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating        Int?      // 1-5"
      },
      {
        "name": "feedback",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feedback      String?"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-ai-result",
    "sourceProject": "beauty-wellness-ai",
    "name": "AiResult",
    "displayName": "Ai Result",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String   @id @default(cuid())"
      },
      {
        "name": "feature",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature     String"
      },
      {
        "name": "businessId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId  String?"
      },
      {
        "name": "userId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String?"
      },
      {
        "name": "model",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model       String"
      },
      {
        "name": "input",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input       Json"
      },
      {
        "name": "output",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output      Json"
      },
      {
        "name": "tokens",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens      Int?"
      },
      {
        "name": "durationMs",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "durationMs  Int?"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-appointment",
    "sourceProject": "beauty-wellness-ai",
    "name": "Appointment",
    "displayName": "Appointment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String            @id @default(cuid())"
      },
      {
        "name": "status",
        "type": "AppointmentStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "BOOKED",
        "sourceLine": "status        AppointmentStatus @default(BOOKED)"
      },
      {
        "name": "scheduledStart",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledStart DateTime"
      },
      {
        "name": "scheduledEnd",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledEnd  DateTime"
      },
      {
        "name": "actualStart",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actualStart   DateTime?"
      },
      {
        "name": "actualEnd",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actualEnd     DateTime?"
      },
      {
        "name": "checkedInAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "checkedInAt   DateTime?"
      },
      {
        "name": "checkedOutAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "checkedOutAt  DateTime?"
      },
      {
        "name": "clientName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientName    String?"
      },
      {
        "name": "clientPhone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientPhone   String?"
      },
      {
        "name": "clientEmail",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientEmail   String?"
      },
      {
        "name": "source",
        "type": "BookingSource",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PHONE",
        "sourceLine": "source        BookingSource     @default(PHONE)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "internalNotes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "internalNotes String?"
      },
      {
        "name": "isConfirmed",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isConfirmed   Boolean           @default(false)"
      },
      {
        "name": "confirmedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confirmedAt   DateTime?"
      },
      {
        "name": "confirmationSent",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "confirmationSent Boolean        @default(false)"
      },
      {
        "name": "reminderSent",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "reminderSent  Boolean           @default(false)"
      },
      {
        "name": "reminderSentAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reminderSentAt DateTime?"
      },
      {
        "name": "emailReminderSent",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "emailReminderSent Boolean       @default(false)"
      },
      {
        "name": "emailReminderSentAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "emailReminderSentAt DateTime?"
      },
      {
        "name": "callReminderSent",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "callReminderSent Boolean        @default(false)"
      },
      {
        "name": "callReminderSentAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "callReminderSentAt DateTime?"
      },
      {
        "name": "noShowRisk",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "noShowRisk    Decimal?          @db.Decimal(5, 2)"
      },
      {
        "name": "depositPaid",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "depositPaid   Decimal?          @db.Decimal(10, 2)"
      },
      {
        "name": "depositPaidAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "depositPaidAt DateTime?"
      },
      {
        "name": "isRecurring",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isRecurring   Boolean           @default(false)"
      },
      {
        "name": "recurrenceRule",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recurrenceRule String?"
      },
      {
        "name": "parentAppointmentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parentAppointmentId String?"
      },
      {
        "name": "googleEventId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "googleEventId String?"
      },
      {
        "name": "outlookEventId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outlookEventId String?"
      },
      {
        "name": "clientGoogleEventId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientGoogleEventId String?"
      },
      {
        "name": "clientOutlookEventId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientOutlookEventId String?"
      },
      {
        "name": "client",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client        Client?           @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String?"
      },
      {
        "name": "staff",
        "type": "Staff",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staff         Staff             @relation(fields: [staffId], references: [id])"
      },
      {
        "name": "staffId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staffId       String"
      },
      {
        "name": "location",
        "type": "Location",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location      Location          @relation(fields: [locationId], references: [id])"
      },
      {
        "name": "locationId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "locationId    String"
      },
      {
        "name": "services",
        "type": "AppointmentService[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "services      AppointmentService[]"
      },
      {
        "name": "photos",
        "type": "ClientPhoto[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "photos        ClientPhoto[]"
      },
      {
        "name": "transaction",
        "type": "Transaction?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction   Transaction?"
      },
      {
        "name": "marketplaceLead",
        "type": "MarketplaceLead?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "marketplaceLead MarketplaceLead?"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-appointment-add-on",
    "sourceProject": "beauty-wellness-ai",
    "name": "AppointmentAddOn",
    "displayName": "Appointment Add On",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "price",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price         Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "duration",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration      Int"
      },
      {
        "name": "appointmentService",
        "type": "AppointmentService",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointmentService AppointmentService @relation(fields: [appointmentServiceId], references: [id])"
      },
      {
        "name": "appointmentServiceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointmentServiceId String"
      },
      {
        "name": "addOn",
        "type": "ServiceAddOn",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "addOn         ServiceAddOn @relation(fields: [addOnId], references: [id])"
      },
      {
        "name": "addOnId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "addOnId       String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-appointment-service",
    "sourceProject": "beauty-wellness-ai",
    "name": "AppointmentService",
    "displayName": "Appointment Service",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "price",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price         Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "duration",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration      Int"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "appointment",
        "type": "Appointment",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointment   Appointment @relation(fields: [appointmentId], references: [id])"
      },
      {
        "name": "appointmentId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointmentId String"
      },
      {
        "name": "service",
        "type": "Service",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service       Service   @relation(fields: [serviceId], references: [id])"
      },
      {
        "name": "serviceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceId     String"
      },
      {
        "name": "addOns",
        "type": "AppointmentAddOn[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "addOns        AppointmentAddOn[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-attachment",
    "sourceProject": "beauty-wellness-ai",
    "name": "Attachment",
    "displayName": "Attachment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "fileName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fileName      String"
      },
      {
        "name": "fileType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fileType      String"
      },
      {
        "name": "fileSize",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fileSize      Int"
      },
      {
        "name": "filePath",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filePath      String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client        Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String"
      },
      {
        "name": "uploadedById",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploadedById  String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-audit-log",
    "sourceProject": "beauty-wellness-ai",
    "name": "AuditLog",
    "displayName": "Audit Log",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "action",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action        String"
      },
      {
        "name": "entityType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entityType    String"
      },
      {
        "name": "entityId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entityId      String"
      },
      {
        "name": "changes",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "changes       Json?"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user          User      @relation(fields: [userId], references: [id])"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId        String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-automation",
    "sourceProject": "beauty-wellness-ai",
    "name": "Automation",
    "displayName": "Automation",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "triggerType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "triggerType   String"
      },
      {
        "name": "triggerConfig",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "triggerConfig Json?"
      },
      {
        "name": "actions",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actions       Json"
      },
      {
        "name": "timesTriggered",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "timesTriggered Int      @default(0)"
      },
      {
        "name": "lastTriggered",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastTriggered DateTime?"
      },
      {
        "name": "business",
        "type": "Business",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business      Business  @relation(fields: [businessId], references: [id])"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId    String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-business",
    "sourceProject": "beauty-wellness-ai",
    "name": "Business",
    "displayName": "Business",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "type",
        "type": "BusinessType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type          BusinessType"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email         String?"
      },
      {
        "name": "website",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "website       String?"
      },
      {
        "name": "logo",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logo          String?"
      },
      {
        "name": "address",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address       String?"
      },
      {
        "name": "city",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city          String?"
      },
      {
        "name": "state",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state         String?"
      },
      {
        "name": "zipCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zipCode       String?"
      },
      {
        "name": "country",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"US\"",
        "sourceLine": "country       String    @default(\"US\")"
      },
      {
        "name": "timezone",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"America/New_York\"",
        "sourceLine": "timezone      String    @default(\"America/New_York\")"
      },
      {
        "name": "defaultLanguage",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"en\"",
        "sourceLine": "defaultLanguage String  @default(\"en\")"
      },
      {
        "name": "supportedLanguages",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "[\"en\"]",
        "sourceLine": "supportedLanguages String[] @default([\"en\"])"
      },
      {
        "name": "instagram",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "instagram     String?"
      },
      {
        "name": "facebook",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "facebook      String?"
      },
      {
        "name": "tiktok",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tiktok        String?"
      },
      {
        "name": "yelp",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "yelp          String?"
      },
      {
        "name": "googleBusiness",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "googleBusiness String?"
      },
      {
        "name": "taxRate",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "taxRate       Decimal   @db.Decimal(5, 4) @default(0)"
      },
      {
        "name": "stripeCustomerId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripeCustomerId String?"
      },
      {
        "name": "locations",
        "type": "Location[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "locations     Location[]"
      },
      {
        "name": "users",
        "type": "User[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "users         User[]"
      },
      {
        "name": "clients",
        "type": "Client[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clients       Client[]"
      },
      {
        "name": "services",
        "type": "Service[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "services      Service[]"
      },
      {
        "name": "serviceCategories",
        "type": "ServiceCategory[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceCategories ServiceCategory[]"
      },
      {
        "name": "products",
        "type": "Product[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "products      Product[]"
      },
      {
        "name": "productCategories",
        "type": "ProductCategory[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "productCategories ProductCategory[]"
      },
      {
        "name": "loyaltyProgram",
        "type": "LoyaltyProgram?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "loyaltyProgram LoyaltyProgram?"
      },
      {
        "name": "giftCards",
        "type": "GiftCard[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "giftCards     GiftCard[]"
      },
      {
        "name": "campaigns",
        "type": "Campaign[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaigns     Campaign[]"
      },
      {
        "name": "automations",
        "type": "Automation[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "automations   Automation[]"
      },
      {
        "name": "savedFilters",
        "type": "SavedFilter[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "savedFilters  SavedFilter[]"
      },
      {
        "name": "subscription",
        "type": "BusinessSubscription?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subscription      BusinessSubscription?"
      },
      {
        "name": "publicProfile",
        "type": "PublicSalonProfile?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "publicProfile     PublicSalonProfile?"
      },
      {
        "name": "marketplaceLeads",
        "type": "MarketplaceLead[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "marketplaceLeads  MarketplaceLead[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-business-invoice",
    "sourceProject": "beauty-wellness-ai",
    "name": "BusinessInvoice",
    "displayName": "Business Invoice",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id                 String        @id @default(cuid())"
      },
      {
        "name": "invoiceNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "invoiceNumber      String        @unique"
      },
      {
        "name": "periodStart",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "periodStart        DateTime"
      },
      {
        "name": "periodEnd",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "periodEnd          DateTime"
      },
      {
        "name": "subscriptionAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "subscriptionAmount Decimal       @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "commissionAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "commissionAmount   Decimal       @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "totalAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalAmount        Decimal       @db.Decimal(10, 2)"
      },
      {
        "name": "status",
        "type": "InvoiceStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status             InvoiceStatus @default(PENDING)"
      },
      {
        "name": "stripeInvoiceId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripeInvoiceId    String?"
      },
      {
        "name": "paidAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paidAt             DateTime?"
      },
      {
        "name": "lineItems",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lineItems          Json?"
      },
      {
        "name": "dueDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate            DateTime"
      },
      {
        "name": "subscription",
        "type": "BusinessSubscription",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subscription       BusinessSubscription @relation(fields: [subscriptionId], references: [id])"
      },
      {
        "name": "subscriptionId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subscriptionId     String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-business-subscription",
    "sourceProject": "beauty-wellness-ai",
    "name": "BusinessSubscription",
    "displayName": "Business Subscription",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id                       String             @id @default(cuid())"
      },
      {
        "name": "plan",
        "type": "SubscriptionPlan",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "STARTER",
        "sourceLine": "plan                     SubscriptionPlan   @default(STARTER)"
      },
      {
        "name": "status",
        "type": "SubscriptionStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status                   SubscriptionStatus @default(ACTIVE)"
      },
      {
        "name": "billingCycle",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"monthly\"",
        "sourceLine": "billingCycle             String             @default(\"monthly\")"
      },
      {
        "name": "monthlyPrice",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "monthlyPrice             Decimal            @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "marketplaceCommissionPct",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "20",
        "sourceLine": "marketplaceCommissionPct Decimal            @db.Decimal(5, 2) @default(20)"
      },
      {
        "name": "stripeCustomerId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripeCustomerId         String?"
      },
      {
        "name": "stripeSubscriptionId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripeSubscriptionId     String?"
      },
      {
        "name": "trialEndsAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trialEndsAt              DateTime?"
      },
      {
        "name": "currentPeriodStart",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentPeriodStart       DateTime?"
      },
      {
        "name": "currentPeriodEnd",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentPeriodEnd         DateTime?"
      },
      {
        "name": "cancelledAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cancelledAt              DateTime?"
      },
      {
        "name": "cancelReason",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cancelReason             String?"
      },
      {
        "name": "business",
        "type": "Business",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business                 Business           @relation(fields: [businessId], references: [id])"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "businessId               String             @unique"
      },
      {
        "name": "invoices",
        "type": "BusinessInvoice[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoices                 BusinessInvoice[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-campaign",
    "sourceProject": "beauty-wellness-ai",
    "name": "Campaign",
    "displayName": "Campaign",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "type",
        "type": "CampaignType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type          CampaignType"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"draft\"",
        "sourceLine": "status        String    @default(\"draft\")"
      },
      {
        "name": "subject",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject       String?"
      },
      {
        "name": "content",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content       String"
      },
      {
        "name": "image",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image         String?"
      },
      {
        "name": "targetTags",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "targetTags    String[]"
      },
      {
        "name": "targetSegment",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "targetSegment String?"
      },
      {
        "name": "scheduledAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledAt   DateTime?"
      },
      {
        "name": "sentAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sentAt        DateTime?"
      },
      {
        "name": "sentCount",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sentCount     Int       @default(0)"
      },
      {
        "name": "openCount",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "openCount     Int       @default(0)"
      },
      {
        "name": "clickCount",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "clickCount    Int       @default(0)"
      },
      {
        "name": "business",
        "type": "Business",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business      Business  @relation(fields: [businessId], references: [id])"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId    String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-client",
    "sourceProject": "beauty-wellness-ai",
    "name": "Client",
    "displayName": "Client",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String        @id @default(cuid())"
      },
      {
        "name": "firstName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName     String"
      },
      {
        "name": "lastName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName      String"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email         String?"
      },
      {
        "name": "phone",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String"
      },
      {
        "name": "mobile",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mobile        String?"
      },
      {
        "name": "business",
        "type": "Business",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business      Business      @relation(fields: [businessId], references: [id])"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId    String"
      },
      {
        "name": "user",
        "type": "User?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user          User?         @relation(fields: [userId], references: [id])"
      },
      {
        "name": "userId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "userId        String?       @unique"
      },
      {
        "name": "preferredLanguage",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"en\"",
        "sourceLine": "preferredLanguage String?  @default(\"en\")"
      },
      {
        "name": "preferredStaffId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "preferredStaffId String?"
      },
      {
        "name": "preferredContactMethod",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"sms\"",
        "sourceLine": "preferredContactMethod String? @default(\"sms\")"
      },
      {
        "name": "birthday",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "birthday      DateTime?"
      },
      {
        "name": "birthdayMonth",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "birthdayMonth Int?"
      },
      {
        "name": "birthdayDay",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "birthdayDay   Int?"
      },
      {
        "name": "allowSms",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "allowSms      Boolean       @default(true)"
      },
      {
        "name": "allowEmail",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "allowEmail    Boolean       @default(true)"
      },
      {
        "name": "referralSource",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referralSource String?"
      },
      {
        "name": "referredById",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referredById  String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "internalNotes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "internalNotes String?"
      },
      {
        "name": "tags",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags          String[]"
      },
      {
        "name": "status",
        "type": "ClientStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status        ClientStatus  @default(ACTIVE)"
      },
      {
        "name": "stripeCustomerId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripeCustomerId String?"
      },
      {
        "name": "googleCalendarToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "googleCalendarToken String?"
      },
      {
        "name": "googleRefreshToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "googleRefreshToken String?"
      },
      {
        "name": "googleCalendarId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "googleCalendarId String?"
      },
      {
        "name": "outlookCalendarToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outlookCalendarToken String?"
      },
      {
        "name": "outlookRefreshToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outlookRefreshToken  String?"
      },
      {
        "name": "outlookCalendarId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outlookCalendarId    String?"
      },
      {
        "name": "outlookTokenExpiry",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outlookTokenExpiry   DateTime?"
      },
      {
        "name": "appointments",
        "type": "Appointment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointments  Appointment[]"
      },
      {
        "name": "photos",
        "type": "ClientPhoto[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "photos        ClientPhoto[]"
      },
      {
        "name": "formulas",
        "type": "ServiceFormula[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "formulas      ServiceFormula[]"
      },
      {
        "name": "preferences",
        "type": "ClientPreference[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "preferences   ClientPreference[]"
      },
      {
        "name": "loyaltyAccount",
        "type": "LoyaltyAccount?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "loyaltyAccount LoyaltyAccount?"
      },
      {
        "name": "giftCards",
        "type": "GiftCard[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "giftCards     GiftCard[]    @relation(\"GiftCardOwner\")"
      },
      {
        "name": "purchasedGiftCards",
        "type": "GiftCard[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchasedGiftCards GiftCard[] @relation(\"GiftCardPurchaser\")"
      },
      {
        "name": "transactions",
        "type": "Transaction[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactions  Transaction[]"
      },
      {
        "name": "reviews",
        "type": "Review[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviews       Review[]"
      },
      {
        "name": "referrals",
        "type": "Referral[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referrals     Referral[]    @relation(\"Referrer\")"
      },
      {
        "name": "referredBy",
        "type": "Referral?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referredBy    Referral?     @relation(\"Referred\")"
      },
      {
        "name": "communications",
        "type": "Communication[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "communications Communication[]"
      },
      {
        "name": "waitlistEntries",
        "type": "WaitlistEntry[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "waitlistEntries WaitlistEntry[]"
      },
      {
        "name": "activities",
        "type": "Activity[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "activities    Activity[]"
      },
      {
        "name": "clientNotes",
        "type": "ClientNote[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientNotes   ClientNote[]"
      },
      {
        "name": "attachments",
        "type": "Attachment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "attachments   Attachment[]"
      },
      {
        "name": "familyMemberships",
        "type": "FamilyMember[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "familyMemberships FamilyMember[]"
      },
      {
        "name": "primaryFamilyGroups",
        "type": "FamilyGroup[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "primaryFamilyGroups FamilyGroup[] @relation(\"PrimaryFamilyContact\")"
      },
      {
        "name": "marketplaceLeads",
        "type": "MarketplaceLead[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "marketplaceLeads MarketplaceLead[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-client-note",
    "sourceProject": "beauty-wellness-ai",
    "name": "ClientNote",
    "displayName": "Client Note",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "content",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content       String"
      },
      {
        "name": "isPinned",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isPinned      Boolean   @default(false)"
      },
      {
        "name": "isPrivate",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isPrivate     Boolean   @default(false)"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client        Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String"
      },
      {
        "name": "createdById",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdById   String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-client-photo",
    "sourceProject": "beauty-wellness-ai",
    "name": "ClientPhoto",
    "displayName": "Client Photo",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "type",
        "type": "PhotoType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "AFTER",
        "sourceLine": "type          PhotoType @default(AFTER)"
      },
      {
        "name": "filePath",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filePath      String"
      },
      {
        "name": "caption",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "caption       String?"
      },
      {
        "name": "serviceDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceDate   DateTime?"
      },
      {
        "name": "isPortfolio",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isPortfolio   Boolean   @default(false)"
      },
      {
        "name": "takenAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "takenAt       DateTime  @default(now())"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client        Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String"
      },
      {
        "name": "appointment",
        "type": "Appointment?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointment   Appointment? @relation(fields: [appointmentId], references: [id])"
      },
      {
        "name": "appointmentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointmentId String?"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-client-preference",
    "sourceProject": "beauty-wellness-ai",
    "name": "ClientPreference",
    "displayName": "Client Preference",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category      String"
      },
      {
        "name": "value",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value         String"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client        Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-commission",
    "sourceProject": "beauty-wellness-ai",
    "name": "Commission",
    "displayName": "Commission",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "amount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount        Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type          String"
      },
      {
        "name": "rate",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rate          Decimal   @db.Decimal(5, 2)"
      },
      {
        "name": "baseAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "baseAmount    Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "transaction",
        "type": "Transaction",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction   Transaction @relation(fields: [transactionId], references: [id])"
      },
      {
        "name": "transactionId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactionId String"
      },
      {
        "name": "staff",
        "type": "Staff",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staff         Staff     @relation(fields: [staffId], references: [id])"
      },
      {
        "name": "staffId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staffId       String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-communication",
    "sourceProject": "beauty-wellness-ai",
    "name": "Communication",
    "displayName": "Communication",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type          String"
      },
      {
        "name": "direction",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "direction     String"
      },
      {
        "name": "content",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content       String?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"sent\"",
        "sourceLine": "status        String    @default(\"sent\")"
      },
      {
        "name": "sentAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "sentAt        DateTime  @default(now())"
      },
      {
        "name": "openedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "openedAt      DateTime?"
      },
      {
        "name": "clickedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clickedAt     DateTime?"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client        Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-contact-message",
    "sourceProject": "beauty-wellness-ai",
    "name": "ContactMessage",
    "displayName": "Contact Message",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "firstName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName     String"
      },
      {
        "name": "lastName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName      String"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email         String"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "subject",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject       String"
      },
      {
        "name": "message",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message       String"
      },
      {
        "name": "isRead",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isRead        Boolean   @default(false)"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-src-lib-db-pass7-ts-corporate-wellness-enrollments",
    "sourceProject": "beauty-wellness-ai",
    "name": "corporate_wellness_enrollments",
    "displayName": "Corporate Wellness Enrollments",
    "framework": "SQL",
    "sourceFile": "src/lib/db-pass7.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "program_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "program_id INTEGER NOT NULL"
      },
      {
        "name": "client_org_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_org_id TEXT"
      },
      {
        "name": "client_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_id TEXT"
      },
      {
        "name": "member_email",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "member_email TEXT"
      },
      {
        "name": "member_name",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "member_name TEXT"
      },
      {
        "name": "enrolled_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "enrolled_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'enrolled'",
        "sourceLine": "status TEXT DEFAULT 'enrolled'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-src-app-api-corporate-wellness-route-ts-corporate-wellness-members",
    "sourceProject": "beauty-wellness-ai",
    "name": "corporate_wellness_members",
    "displayName": "Corporate Wellness Members",
    "framework": "SQL",
    "sourceFile": "src/app/api/corporate-wellness/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "program_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "program_id INTEGER NOT NULL"
      },
      {
        "name": "client_id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_id TEXT NOT NULL"
      },
      {
        "name": "joined_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "joined_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-src-lib-db-pass7-ts-corporate-wellness-programs",
    "sourceProject": "beauty-wellness-ai",
    "name": "corporate_wellness_programs",
    "displayName": "Corporate Wellness Programs",
    "framework": "SQL",
    "sourceFile": "src/lib/db-pass7.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "business_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business_id TEXT"
      },
      {
        "name": "client_org_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_org_id TEXT"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "starts_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "starts_at TIMESTAMP"
      },
      {
        "name": "ends_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ends_at TIMESTAMP"
      },
      {
        "name": "budget",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget NUMERIC(12,2)"
      },
      {
        "name": "seat_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seat_count INTEGER"
      },
      {
        "name": "contact_email",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_email TEXT"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status TEXT DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-src-app-api-corporate-wellness-route-ts-corporate-wellness-programs",
    "sourceProject": "beauty-wellness-ai",
    "name": "corporate_wellness_programs",
    "displayName": "Corporate Wellness Programs",
    "framework": "SQL",
    "sourceFile": "src/app/api/corporate-wellness/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "business_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business_id TEXT"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "sponsor_company",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sponsor_company TEXT"
      },
      {
        "name": "starts_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "starts_at TIMESTAMP"
      },
      {
        "name": "ends_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ends_at TIMESTAMP"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status TEXT DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-daily-closeout",
    "sourceProject": "beauty-wellness-ai",
    "name": "DailyCloseout",
    "displayName": "Daily Closeout",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "date",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date          DateTime"
      },
      {
        "name": "staffId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staffId       String?"
      },
      {
        "name": "staff",
        "type": "Staff?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staff         Staff?    @relation(fields: [staffId], references: [id])"
      },
      {
        "name": "totalTransactions",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalTransactions Int"
      },
      {
        "name": "grossSales",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "grossSales    Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "discounts",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "discounts     Decimal   @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "netSales",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "netSales      Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "tax",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tax           Decimal   @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "tips",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tips          Decimal   @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "refunds",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "refunds       Decimal   @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "grandTotal",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "grandTotal    Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "cashTotal",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "cashTotal     Decimal   @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "cardTotal",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "cardTotal     Decimal   @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "otherTotal",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "otherTotal    Decimal   @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "cashCounted",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cashCounted   Decimal?  @db.Decimal(10, 2)"
      },
      {
        "name": "cashVariance",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cashVariance  Decimal?  @db.Decimal(10, 2)"
      },
      {
        "name": "appointmentsTotal",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "appointmentsTotal Int   @default(0)"
      },
      {
        "name": "appointmentsCompleted",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "appointmentsCompleted Int @default(0)"
      },
      {
        "name": "appointmentsNoShow",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "appointmentsNoShow Int  @default(0)"
      },
      {
        "name": "newClients",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "newClients    Int       @default(0)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "closedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "closedAt      DateTime  @default(now())"
      },
      {
        "name": "reportData",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reportData    Json?"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-src-lib-db-pass7-ts-facility-maintenance",
    "sourceProject": "beauty-wellness-ai",
    "name": "facility_maintenance",
    "displayName": "Facility Maintenance",
    "framework": "SQL",
    "sourceFile": "src/lib/db-pass7.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "business_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business_id TEXT"
      },
      {
        "name": "location_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_id TEXT"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category TEXT"
      },
      {
        "name": "priority",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'normal'",
        "sourceLine": "priority TEXT DEFAULT 'normal'"
      },
      {
        "name": "scheduled_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_date TIMESTAMP"
      },
      {
        "name": "completed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_at TIMESTAMP"
      },
      {
        "name": "recurrence",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recurrence TEXT"
      },
      {
        "name": "assignee",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignee TEXT"
      },
      {
        "name": "vendor",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor TEXT"
      },
      {
        "name": "estimated_cost",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_cost NUMERIC(12,2)"
      },
      {
        "name": "actual_cost",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_cost NUMERIC(12,2)"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status TEXT DEFAULT 'scheduled'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-family-group",
    "sourceProject": "beauty-wellness-ai",
    "name": "FamilyGroup",
    "displayName": "Family Group",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "primaryContactId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "primaryContactId String?"
      },
      {
        "name": "primaryContact",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "primaryContact Client?  @relation(\"PrimaryFamilyContact\", fields: [primaryContactId], references: [id])"
      },
      {
        "name": "members",
        "type": "FamilyMember[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "members       FamilyMember[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-family-member",
    "sourceProject": "beauty-wellness-ai",
    "name": "FamilyMember",
    "displayName": "Family Member",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "relationship",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "relationship  String"
      },
      {
        "name": "family",
        "type": "FamilyGroup",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "family        FamilyGroup @relation(fields: [familyId], references: [id])"
      },
      {
        "name": "familyId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "familyId      String"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client        Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-src-app-api-gap-nonai-beauty-wellness-ai-public-franchise-multi-tenant-billing-route-ts-gap-features",
    "sourceProject": "beauty-wellness-ai",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-nonai-beauty-wellness-ai/public-franchise-multi-tenant-billing/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-src-app-api-gap-nonai-beauty-wellness-ai-native-mobile-app-shell-only-web-route-ts-gap-features",
    "sourceProject": "beauty-wellness-ai",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-nonai-beauty-wellness-ai/native-mobile-app-shell-only-web/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-src-app-api-gap-nonai-beauty-wellness-ai-insurance-hsa-reimbursement-flow-route-ts-gap-features",
    "sourceProject": "beauty-wellness-ai",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-nonai-beauty-wellness-ai/insurance-hsa-reimbursement-flow/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-src-app-api-gap-nonai-beauty-wellness-ai-hardware-pos-device-integration-cash-drawer-barcode-route-ts-gap-features",
    "sourceProject": "beauty-wellness-ai",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-nonai-beauty-wellness-ai/hardware-pos-device-integration-cash-drawer-barcode/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-gift-card",
    "sourceProject": "beauty-wellness-ai",
    "name": "GiftCard",
    "displayName": "Gift Card",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "code",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "code          String    @unique"
      },
      {
        "name": "initialBalance",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "initialBalance Decimal  @db.Decimal(10, 2)"
      },
      {
        "name": "currentBalance",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentBalance Decimal  @db.Decimal(10, 2)"
      },
      {
        "name": "expiresAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiresAt     DateTime?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"active\"",
        "sourceLine": "status        String    @default(\"active\")"
      },
      {
        "name": "purchasedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "purchasedAt   DateTime  @default(now())"
      },
      {
        "name": "isDigital",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isDigital     Boolean   @default(true)"
      },
      {
        "name": "recipientEmail",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipientEmail String?"
      },
      {
        "name": "recipientName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipientName String?"
      },
      {
        "name": "message",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message       String?"
      },
      {
        "name": "sentAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sentAt        DateTime?"
      },
      {
        "name": "business",
        "type": "Business",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business      Business  @relation(fields: [businessId], references: [id])"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId    String"
      },
      {
        "name": "purchasedBy",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchasedBy   Client?   @relation(\"GiftCardPurchaser\", fields: [purchasedById], references: [id])"
      },
      {
        "name": "purchasedById",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchasedById String?"
      },
      {
        "name": "owner",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner         Client?   @relation(\"GiftCardOwner\", fields: [ownerId], references: [id])"
      },
      {
        "name": "ownerId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ownerId       String?"
      },
      {
        "name": "usageHistory",
        "type": "GiftCardUsage[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "usageHistory  GiftCardUsage[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-gift-card-usage",
    "sourceProject": "beauty-wellness-ai",
    "name": "GiftCardUsage",
    "displayName": "Gift Card Usage",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "amount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount        Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "balanceAfter",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "balanceAfter  Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "usedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "usedAt        DateTime  @default(now())"
      },
      {
        "name": "giftCard",
        "type": "GiftCard",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "giftCard      GiftCard  @relation(fields: [giftCardId], references: [id])"
      },
      {
        "name": "giftCardId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "giftCardId    String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-group-appointment",
    "sourceProject": "beauty-wellness-ai",
    "name": "GroupAppointment",
    "displayName": "Group Appointment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String?"
      },
      {
        "name": "eventType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"group\"",
        "sourceLine": "eventType     String    @default(\"group\") // group, party, event, class"
      },
      {
        "name": "scheduledStart",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledStart DateTime"
      },
      {
        "name": "scheduledEnd",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledEnd  DateTime"
      },
      {
        "name": "maxParticipants",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "10",
        "sourceLine": "maxParticipants Int     @default(10)"
      },
      {
        "name": "minParticipants",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "2",
        "sourceLine": "minParticipants Int     @default(2)"
      },
      {
        "name": "pricePerPerson",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pricePerPerson Decimal  @db.Decimal(10, 2)"
      },
      {
        "name": "depositRequired",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "depositRequired Decimal? @db.Decimal(10, 2)"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"pending\"",
        "sourceLine": "status        String    @default(\"pending\") // pending, confirmed, in_progress, completed, cancelled"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "hostName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hostName      String?"
      },
      {
        "name": "hostPhone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hostPhone     String?"
      },
      {
        "name": "hostEmail",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hostEmail     String?"
      },
      {
        "name": "staffId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staffId       String"
      },
      {
        "name": "locationId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "locationId    String"
      },
      {
        "name": "serviceId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceId     String?"
      },
      {
        "name": "participants",
        "type": "GroupParticipant[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "participants  GroupParticipant[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-group-participant",
    "sourceProject": "beauty-wellness-ai",
    "name": "GroupParticipant",
    "displayName": "Group Participant",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email         String?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"confirmed\"",
        "sourceLine": "status        String    @default(\"confirmed\") // confirmed, cancelled, no_show"
      },
      {
        "name": "checkedIn",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "checkedIn     Boolean   @default(false)"
      },
      {
        "name": "paidAmount",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paidAmount    Decimal?  @db.Decimal(10, 2)"
      },
      {
        "name": "groupAppointment",
        "type": "GroupAppointment",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "groupAppointment GroupAppointment @relation(fields: [groupAppointmentId], references: [id])"
      },
      {
        "name": "groupAppointmentId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "groupAppointmentId String"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String?"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-src-lib-db-pass7-ts-inventory",
    "sourceProject": "beauty-wellness-ai",
    "name": "inventory",
    "displayName": "Inventory",
    "framework": "SQL",
    "sourceFile": "src/lib/db-pass7.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "business_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business_id TEXT"
      },
      {
        "name": "sku",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sku TEXT"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category TEXT"
      },
      {
        "name": "unit",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit TEXT"
      },
      {
        "name": "quantity_on_hand",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "quantity_on_hand NUMERIC(12,3) DEFAULT 0"
      },
      {
        "name": "reorder_level",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reorder_level NUMERIC(12,3)"
      },
      {
        "name": "reorder_quantity",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reorder_quantity NUMERIC(12,3)"
      },
      {
        "name": "unit_cost",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_cost NUMERIC(12,2)"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER"
      },
      {
        "name": "location",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "active BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-lead",
    "sourceProject": "beauty-wellness-ai",
    "name": "Lead",
    "displayName": "Lead",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String      @id @default(cuid())"
      },
      {
        "name": "salonName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonName     String"
      },
      {
        "name": "ownerName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ownerName     String"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email         String?"
      },
      {
        "name": "phone",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String"
      },
      {
        "name": "website",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "website       String?"
      },
      {
        "name": "address",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address       String?"
      },
      {
        "name": "city",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city          String?"
      },
      {
        "name": "state",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state         String?"
      },
      {
        "name": "zip",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zip           String?"
      },
      {
        "name": "source",
        "type": "LeadSource",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "OTHER",
        "sourceLine": "source        LeadSource  @default(OTHER)"
      },
      {
        "name": "status",
        "type": "LeadStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NEW",
        "sourceLine": "status        LeadStatus  @default(NEW)"
      },
      {
        "name": "priority",
        "type": "LeadPriority",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "MEDIUM",
        "sourceLine": "priority      LeadPriority @default(MEDIUM)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "lastContactAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastContactAt DateTime?"
      },
      {
        "name": "nextFollowUp",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nextFollowUp  DateTime?"
      },
      {
        "name": "convertedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "convertedAt   DateTime?"
      },
      {
        "name": "lostReason",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lostReason    String?"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-location",
    "sourceProject": "beauty-wellness-ai",
    "name": "Location",
    "displayName": "Location",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email         String?"
      },
      {
        "name": "address",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address       String"
      },
      {
        "name": "address2",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address2      String?"
      },
      {
        "name": "city",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city          String"
      },
      {
        "name": "state",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state         String"
      },
      {
        "name": "zip",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zip           String"
      },
      {
        "name": "country",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"USA\"",
        "sourceLine": "country       String    @default(\"USA\")"
      },
      {
        "name": "latitude",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "latitude      Decimal?  @db.Decimal(10, 7)"
      },
      {
        "name": "longitude",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "longitude     Decimal?  @db.Decimal(10, 7)"
      },
      {
        "name": "operatingHours",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "operatingHours Json?"
      },
      {
        "name": "allowOnlineBooking",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "allowOnlineBooking Boolean @default(true)"
      },
      {
        "name": "bookingUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bookingUrl    String?"
      },
      {
        "name": "advanceBookingDays",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "30",
        "sourceLine": "advanceBookingDays Int   @default(30)"
      },
      {
        "name": "cancellationHours",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "24",
        "sourceLine": "cancellationHours Int    @default(24)"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "business",
        "type": "Business",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business      Business  @relation(fields: [businessId], references: [id])"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId    String"
      },
      {
        "name": "staff",
        "type": "Staff[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staff         Staff[]"
      },
      {
        "name": "appointments",
        "type": "Appointment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointments  Appointment[]"
      },
      {
        "name": "waitlist",
        "type": "WaitlistEntry[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "waitlist      WaitlistEntry[]"
      },
      {
        "name": "transactions",
        "type": "Transaction[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactions  Transaction[]"
      },
      {
        "name": "marketplaceLeads",
        "type": "MarketplaceLead[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "marketplaceLeads MarketplaceLead[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-loyalty-account",
    "sourceProject": "beauty-wellness-ai",
    "name": "LoyaltyAccount",
    "displayName": "Loyalty Account",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "pointsBalance",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "pointsBalance Int       @default(0)"
      },
      {
        "name": "lifetimePoints",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "lifetimePoints Int      @default(0)"
      },
      {
        "name": "tier",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Bronze\"",
        "sourceLine": "tier          String    @default(\"Bronze\")"
      },
      {
        "name": "tierExpiresAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tierExpiresAt DateTime?"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client        Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "clientId      String    @unique"
      },
      {
        "name": "program",
        "type": "LoyaltyProgram",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "program       LoyaltyProgram @relation(fields: [programId], references: [id])"
      },
      {
        "name": "programId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "programId     String"
      },
      {
        "name": "transactions",
        "type": "LoyaltyTransaction[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactions  LoyaltyTransaction[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-loyalty-program",
    "sourceProject": "beauty-wellness-ai",
    "name": "LoyaltyProgram",
    "displayName": "Loyalty Program",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive        Boolean   @default(true)"
      },
      {
        "name": "pointsPerDollar",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "pointsPerDollar Decimal   @db.Decimal(5, 2) @default(1)"
      },
      {
        "name": "bonusOnSignup",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "bonusOnSignup   Int       @default(0)"
      },
      {
        "name": "bonusOnBirthday",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "bonusOnBirthday Int       @default(0)"
      },
      {
        "name": "bonusOnReferral",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "bonusOnReferral Int       @default(0)"
      },
      {
        "name": "tiers",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tiers           Json?"
      },
      {
        "name": "pointsExpireMonths",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pointsExpireMonths Int?"
      },
      {
        "name": "business",
        "type": "Business",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business        Business  @relation(fields: [businessId], references: [id])"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "businessId      String    @unique"
      },
      {
        "name": "accounts",
        "type": "LoyaltyAccount[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accounts        LoyaltyAccount[]"
      },
      {
        "name": "rewards",
        "type": "LoyaltyReward[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rewards         LoyaltyReward[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-loyalty-reward",
    "sourceProject": "beauty-wellness-ai",
    "name": "LoyaltyReward",
    "displayName": "Loyalty Reward",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "pointsCost",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pointsCost    Int"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type          String"
      },
      {
        "name": "value",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value         Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "image",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image         String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "program",
        "type": "LoyaltyProgram",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "program       LoyaltyProgram @relation(fields: [programId], references: [id])"
      },
      {
        "name": "programId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "programId     String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-loyalty-transaction",
    "sourceProject": "beauty-wellness-ai",
    "name": "LoyaltyTransaction",
    "displayName": "Loyalty Transaction",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type          String"
      },
      {
        "name": "points",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "points        Int"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "expiresAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiresAt     DateTime?"
      },
      {
        "name": "account",
        "type": "LoyaltyAccount",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "account       LoyaltyAccount @relation(fields: [accountId], references: [id])"
      },
      {
        "name": "accountId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountId     String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-marketplace-lead",
    "sourceProject": "beauty-wellness-ai",
    "name": "MarketplaceLead",
    "displayName": "Marketplace Lead",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id               String            @id @default(cuid())"
      },
      {
        "name": "source",
        "type": "MarketplaceSource",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "MARKETPLACE_SEARCH",
        "sourceLine": "source           MarketplaceSource @default(MARKETPLACE_SEARCH)"
      },
      {
        "name": "status",
        "type": "LeadStatusType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NEW",
        "sourceLine": "status           LeadStatusType    @default(NEW)"
      },
      {
        "name": "sessionId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sessionId        String?"
      },
      {
        "name": "utmSource",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "utmSource        String?"
      },
      {
        "name": "utmMedium",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "utmMedium        String?"
      },
      {
        "name": "utmCampaign",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "utmCampaign      String?"
      },
      {
        "name": "searchQuery",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "searchQuery      String?"
      },
      {
        "name": "viewedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "viewedAt         DateTime          @default(now())"
      },
      {
        "name": "bookedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bookedAt         DateTime?"
      },
      {
        "name": "completedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completedAt      DateTime?"
      },
      {
        "name": "commissionRate",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commissionRate   Decimal?          @db.Decimal(5, 2)"
      },
      {
        "name": "commissionAmount",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commissionAmount Decimal?          @db.Decimal(10, 2)"
      },
      {
        "name": "commissionPaidAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commissionPaidAt DateTime?"
      },
      {
        "name": "business",
        "type": "Business",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business         Business          @relation(fields: [businessId], references: [id])"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId       String"
      },
      {
        "name": "location",
        "type": "Location?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location         Location?         @relation(fields: [locationId], references: [id])"
      },
      {
        "name": "locationId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "locationId       String?"
      },
      {
        "name": "appointment",
        "type": "Appointment?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointment      Appointment?      @relation(fields: [appointmentId], references: [id])"
      },
      {
        "name": "appointmentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "appointmentId    String?           @unique"
      },
      {
        "name": "client",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client           Client?           @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId         String?"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-membership",
    "sourceProject": "beauty-wellness-ai",
    "name": "Membership",
    "displayName": "Membership",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "price",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price         Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "billingCycle",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"monthly\"",
        "sourceLine": "billingCycle  String    @default(\"monthly\") // monthly, quarterly, yearly"
      },
      {
        "name": "discountPercent",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "discountPercent Decimal @db.Decimal(5, 2) @default(0)"
      },
      {
        "name": "freeServicesPerMonth",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "freeServicesPerMonth Int @default(0)"
      },
      {
        "name": "priorityBooking",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "priorityBooking Boolean @default(false)"
      },
      {
        "name": "guestPasses",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "guestPasses   Int       @default(0)"
      },
      {
        "name": "includedServices",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "includedServices Json?"
      },
      {
        "name": "image",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image         String?"
      },
      {
        "name": "color",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color         String?"
      },
      {
        "name": "sortOrder",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sortOrder     Int       @default(0)"
      },
      {
        "name": "isPopular",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isPopular     Boolean   @default(false)"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId    String"
      },
      {
        "name": "subscriptions",
        "type": "MembershipSubscription[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subscriptions MembershipSubscription[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-membership-subscription",
    "sourceProject": "beauty-wellness-ai",
    "name": "MembershipSubscription",
    "displayName": "Membership Subscription",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"active\"",
        "sourceLine": "status        String    @default(\"active\") // active, paused, cancelled, expired"
      },
      {
        "name": "startDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "startDate     DateTime  @default(now())"
      },
      {
        "name": "nextBillingDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nextBillingDate DateTime"
      },
      {
        "name": "endDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate       DateTime?"
      },
      {
        "name": "lastPaymentDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastPaymentDate DateTime?"
      },
      {
        "name": "lastPaymentAmount",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastPaymentAmount Decimal? @db.Decimal(10, 2)"
      },
      {
        "name": "paymentMethod",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paymentMethod String?"
      },
      {
        "name": "stripeSubscriptionId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripeSubscriptionId String?"
      },
      {
        "name": "freeServicesUsed",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "freeServicesUsed Int    @default(0)"
      },
      {
        "name": "guestPassesUsed",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "guestPassesUsed Int     @default(0)"
      },
      {
        "name": "cancelledAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cancelledAt   DateTime?"
      },
      {
        "name": "cancelReason",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cancelReason  String?"
      },
      {
        "name": "membership",
        "type": "Membership",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "membership    Membership @relation(fields: [membershipId], references: [id])"
      },
      {
        "name": "membershipId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "membershipId  String"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-mental-health-session",
    "sourceProject": "beauty-wellness-ai",
    "name": "MentalHealthSession",
    "displayName": "Mental Health Session",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String?"
      },
      {
        "name": "sessionId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sessionId     String"
      },
      {
        "name": "moodScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "moodScore     Int?      // 1-10"
      },
      {
        "name": "stressLevel",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stressLevel   Int?      // 1-10"
      },
      {
        "name": "anxietyLevel",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "anxietyLevel  Int?      // 1-10"
      },
      {
        "name": "sleepQuality",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sleepQuality  Int?      // 1-10"
      },
      {
        "name": "messages",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "messages      Json?     // Array of chat messages"
      },
      {
        "name": "insights",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "insights      Json?"
      },
      {
        "name": "copingStrategies",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "copingStrategies Json?"
      },
      {
        "name": "resourcesRecommended",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resourcesRecommended Json?"
      },
      {
        "name": "needsProfessionalHelp",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "needsProfessionalHelp Boolean @default(false)"
      },
      {
        "name": "crisisDetected",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "crisisDetected  Boolean   @default(false)"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-package",
    "sourceProject": "beauty-wellness-ai",
    "name": "Package",
    "displayName": "Package",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "price",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price         Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "originalValue",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "originalValue Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "savingsAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "savingsAmount Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "savingsPercent",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "savingsPercent Decimal  @db.Decimal(5, 2)"
      },
      {
        "name": "validityDays",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "365",
        "sourceLine": "validityDays  Int       @default(365)"
      },
      {
        "name": "image",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image         String?"
      },
      {
        "name": "sortOrder",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sortOrder     Int       @default(0)"
      },
      {
        "name": "isPopular",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isPopular     Boolean   @default(false)"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId    String"
      },
      {
        "name": "services",
        "type": "PackageService[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "services      PackageService[]"
      },
      {
        "name": "purchases",
        "type": "PackagePurchase[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchases     PackagePurchase[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-package-purchase",
    "sourceProject": "beauty-wellness-ai",
    "name": "PackagePurchase",
    "displayName": "Package Purchase",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "purchaseDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "purchaseDate  DateTime  @default(now())"
      },
      {
        "name": "expiresAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiresAt     DateTime"
      },
      {
        "name": "totalServices",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalServices Int"
      },
      {
        "name": "usedServices",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "usedServices  Int       @default(0)"
      },
      {
        "name": "remainingServices",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "remainingServices Int"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"active\"",
        "sourceLine": "status        String    @default(\"active\") // active, expired, completed"
      },
      {
        "name": "pricePaid",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pricePaid     Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "package",
        "type": "Package",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "package       Package   @relation(fields: [packageId], references: [id])"
      },
      {
        "name": "packageId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "packageId     String"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String"
      },
      {
        "name": "usages",
        "type": "PackageUsage[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "usages        PackageUsage[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-package-service",
    "sourceProject": "beauty-wellness-ai",
    "name": "PackageService",
    "displayName": "Package Service",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "quantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "quantity      Int       @default(1)"
      },
      {
        "name": "package",
        "type": "Package",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "package       Package   @relation(fields: [packageId], references: [id])"
      },
      {
        "name": "packageId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "packageId     String"
      },
      {
        "name": "serviceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceId     String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-package-usage",
    "sourceProject": "beauty-wellness-ai",
    "name": "PackageUsage",
    "displayName": "Package Usage",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "usedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "usedAt        DateTime  @default(now())"
      },
      {
        "name": "serviceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceId     String"
      },
      {
        "name": "appointmentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointmentId String?"
      },
      {
        "name": "purchase",
        "type": "PackagePurchase",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchase      PackagePurchase @relation(fields: [purchaseId], references: [id])"
      },
      {
        "name": "purchaseId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchaseId    String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-src-lib-db-pass7-ts-pass7-purchase-orders",
    "sourceProject": "beauty-wellness-ai",
    "name": "pass7_purchase_orders",
    "displayName": "Pass7 Purchase Orders",
    "framework": "SQL",
    "sourceFile": "src/lib/db-pass7.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "business_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business_id TEXT"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER"
      },
      {
        "name": "source",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'predictive-supply'",
        "sourceLine": "source TEXT DEFAULT 'predictive-supply'"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status TEXT DEFAULT 'draft'"
      },
      {
        "name": "items",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "items JSONB"
      },
      {
        "name": "estimated_total",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_total NUMERIC(12,2)"
      },
      {
        "name": "requires_approval",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "requires_approval BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "disclaimer",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "disclaimer TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "approved_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_at TIMESTAMP"
      },
      {
        "name": "approved_by",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_by TEXT"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-posture-assessment",
    "sourceProject": "beauty-wellness-ai",
    "name": "PostureAssessment",
    "displayName": "Posture Assessment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String?"
      },
      {
        "name": "occupation",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "occupation    String?"
      },
      {
        "name": "hoursSeated",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hoursSeated   Int?"
      },
      {
        "name": "painAreas",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "painAreas     String[]"
      },
      {
        "name": "currentIssues",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentIssues String[]"
      },
      {
        "name": "activityLevel",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "activityLevel String?"
      },
      {
        "name": "postureScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "postureScore  Int?      // 0-100"
      },
      {
        "name": "issues",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issues        Json?"
      },
      {
        "name": "exercises",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "exercises     Json?"
      },
      {
        "name": "ergonomicTips",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ergonomicTips Json?"
      },
      {
        "name": "improvementPlan",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "improvementPlan Json?"
      },
      {
        "name": "previousScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "previousScore Int?"
      },
      {
        "name": "improvement",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "improvement   Int?"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-product",
    "sourceProject": "beauty-wellness-ai",
    "name": "Product",
    "displayName": "Product",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "sku",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sku           String?"
      },
      {
        "name": "barcode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "barcode       String?"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "brand",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brand         String?"
      },
      {
        "name": "size",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "size          String?"
      },
      {
        "name": "cost",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost          Decimal?  @db.Decimal(10, 2)"
      },
      {
        "name": "price",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price         Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "trackInventory",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "trackInventory Boolean  @default(true)"
      },
      {
        "name": "quantityOnHand",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "quantityOnHand Int      @default(0)"
      },
      {
        "name": "reorderLevel",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "reorderLevel  Int       @default(0)"
      },
      {
        "name": "reorderQuantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "reorderQuantity Int     @default(0)"
      },
      {
        "name": "image",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image         String?"
      },
      {
        "name": "sortOrder",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sortOrder     Int       @default(0)"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "isTaxable",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isTaxable     Boolean   @default(true)"
      },
      {
        "name": "business",
        "type": "Business",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business      Business  @relation(fields: [businessId], references: [id])"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId    String"
      },
      {
        "name": "category",
        "type": "ProductCategory?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category      ProductCategory? @relation(fields: [categoryId], references: [id])"
      },
      {
        "name": "categoryId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "categoryId    String?"
      },
      {
        "name": "lineItems",
        "type": "TransactionLineItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lineItems     TransactionLineItem[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-product-category",
    "sourceProject": "beauty-wellness-ai",
    "name": "ProductCategory",
    "displayName": "Product Category",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "sortOrder",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sortOrder     Int       @default(0)"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "business",
        "type": "Business",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business      Business  @relation(fields: [businessId], references: [id])"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId    String"
      },
      {
        "name": "products",
        "type": "Product[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "products      Product[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-public-salon-profile",
    "sourceProject": "beauty-wellness-ai",
    "name": "PublicSalonProfile",
    "displayName": "Public Salon Profile",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id                String   @id @default(cuid())"
      },
      {
        "name": "slug",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "slug              String   @unique"
      },
      {
        "name": "isListed",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isListed          Boolean  @default(true)"
      },
      {
        "name": "featuredUntil",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "featuredUntil     DateTime?"
      },
      {
        "name": "metaTitle",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metaTitle         String?"
      },
      {
        "name": "metaDescription",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metaDescription   String?"
      },
      {
        "name": "headline",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "headline          String?"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description       String?"
      },
      {
        "name": "specialties",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialties       String[]"
      },
      {
        "name": "amenities",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amenities         String[]"
      },
      {
        "name": "coverImage",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coverImage        String?"
      },
      {
        "name": "galleryImages",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "galleryImages     String[]"
      },
      {
        "name": "avgRating",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avgRating         Decimal? @db.Decimal(3, 2)"
      },
      {
        "name": "reviewCount",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "reviewCount       Int      @default(0)"
      },
      {
        "name": "priceRange",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "priceRange        String?"
      },
      {
        "name": "isVerified",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isVerified        Boolean  @default(false)"
      },
      {
        "name": "verifiedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "verifiedAt        DateTime?"
      },
      {
        "name": "viewCount",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "viewCount         Int      @default(0)"
      },
      {
        "name": "bookingClickCount",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "bookingClickCount Int      @default(0)"
      },
      {
        "name": "business",
        "type": "Business",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business          Business @relation(fields: [businessId], references: [id])"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "businessId        String   @unique"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-purchase-order",
    "sourceProject": "beauty-wellness-ai",
    "name": "PurchaseOrder",
    "displayName": "Purchase Order",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "poNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "poNumber      String    @unique"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"draft\"",
        "sourceLine": "status        String    @default(\"draft\") // draft, submitted, partial, received, cancelled"
      },
      {
        "name": "orderDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "orderDate     DateTime  @default(now())"
      },
      {
        "name": "expectedDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expectedDate  DateTime?"
      },
      {
        "name": "receivedDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receivedDate  DateTime?"
      },
      {
        "name": "subtotal",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal      Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "taxAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "taxAmount     Decimal   @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "shippingAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "shippingAmount Decimal  @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "totalAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalAmount   Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "vendor",
        "type": "Vendor",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor        Vendor    @relation(fields: [vendorId], references: [id])"
      },
      {
        "name": "vendorId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendorId      String"
      },
      {
        "name": "createdById",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdById   String"
      },
      {
        "name": "items",
        "type": "PurchaseOrderItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "items         PurchaseOrderItem[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-purchase-order-item",
    "sourceProject": "beauty-wellness-ai",
    "name": "PurchaseOrderItem",
    "displayName": "Purchase Order Item",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "productId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "productId     String"
      },
      {
        "name": "productName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "productName   String"
      },
      {
        "name": "sku",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sku           String?"
      },
      {
        "name": "quantityOrdered",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantityOrdered Int"
      },
      {
        "name": "quantityReceived",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "quantityReceived Int     @default(0)"
      },
      {
        "name": "unitCost",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitCost      Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "totalCost",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalCost     Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "purchaseOrder",
        "type": "PurchaseOrder",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchaseOrder PurchaseOrder @relation(fields: [purchaseOrderId], references: [id])"
      },
      {
        "name": "purchaseOrderId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchaseOrderId String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-src-lib-db-pass7-ts-recovery-coach-sessions",
    "sourceProject": "beauty-wellness-ai",
    "name": "recovery_coach_sessions",
    "displayName": "Recovery Coach Sessions",
    "framework": "SQL",
    "sourceFile": "src/lib/db-pass7.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "client_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_id TEXT"
      },
      {
        "name": "appointment_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointment_id TEXT"
      },
      {
        "name": "service_name",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service_name TEXT"
      },
      {
        "name": "post_service_context",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "post_service_context TEXT"
      },
      {
        "name": "guidance",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "guidance JSONB"
      },
      {
        "name": "disclaimer",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "disclaimer TEXT"
      },
      {
        "name": "requires_human_review",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "requires_human_review BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-referral",
    "sourceProject": "beauty-wellness-ai",
    "name": "Referral",
    "displayName": "Referral",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"pending\"",
        "sourceLine": "status        String    @default(\"pending\")"
      },
      {
        "name": "referrerReward",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referrerReward String?"
      },
      {
        "name": "referredReward",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referredReward String?"
      },
      {
        "name": "referrerRewarded",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "referrerRewarded Boolean @default(false)"
      },
      {
        "name": "referredRewarded",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "referredRewarded Boolean @default(false)"
      },
      {
        "name": "completedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completedAt   DateTime?"
      },
      {
        "name": "referrer",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referrer      Client    @relation(\"Referrer\", fields: [referrerId], references: [id])"
      },
      {
        "name": "referrerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referrerId    String"
      },
      {
        "name": "referred",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referred      Client    @relation(\"Referred\", fields: [referredId], references: [id])"
      },
      {
        "name": "referredId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "referredId    String    @unique"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-review",
    "sourceProject": "beauty-wellness-ai",
    "name": "Review",
    "displayName": "Review",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "rating",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating        Int"
      },
      {
        "name": "comment",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "comment       String?"
      },
      {
        "name": "source",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source        String"
      },
      {
        "name": "isPublic",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isPublic      Boolean   @default(true)"
      },
      {
        "name": "response",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response      String?"
      },
      {
        "name": "respondedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "respondedAt   DateTime?"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client        Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-saved-filter",
    "sourceProject": "beauty-wellness-ai",
    "name": "SavedFilter",
    "displayName": "Saved Filter",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "entityType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entityType    String"
      },
      {
        "name": "filters",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filters       Json"
      },
      {
        "name": "isDefault",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isDefault     Boolean   @default(false)"
      },
      {
        "name": "user",
        "type": "User?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user          User?     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "userId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId        String?"
      },
      {
        "name": "business",
        "type": "Business?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business      Business? @relation(fields: [businessId], references: [id])"
      },
      {
        "name": "businessId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId    String?"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-schedule-break",
    "sourceProject": "beauty-wellness-ai",
    "name": "ScheduleBreak",
    "displayName": "Schedule Break",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "startTime",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startTime     String"
      },
      {
        "name": "endTime",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endTime       String"
      },
      {
        "name": "label",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "label         String?   // Optional label like \"Lunch\", \"Short break\""
      },
      {
        "name": "schedule",
        "type": "StaffSchedule",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "schedule      StaffSchedule @relation(fields: [scheduleId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "scheduleId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduleId    String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-service",
    "sourceProject": "beauty-wellness-ai",
    "name": "Service",
    "displayName": "Service",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "duration",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration      Int"
      },
      {
        "name": "price",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price         Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "priceType",
        "type": "PriceType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FIXED",
        "sourceLine": "priceType     PriceType @default(FIXED)"
      },
      {
        "name": "priceFrom",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "priceFrom     Decimal?  @db.Decimal(10, 2)"
      },
      {
        "name": "color",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color         String?"
      },
      {
        "name": "image",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image         String?"
      },
      {
        "name": "sortOrder",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sortOrder     Int       @default(0)"
      },
      {
        "name": "allowOnline",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "allowOnline   Boolean   @default(true)"
      },
      {
        "name": "requireDeposit",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "requireDeposit Boolean  @default(false)"
      },
      {
        "name": "depositAmount",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "depositAmount Decimal?  @db.Decimal(10, 2)"
      },
      {
        "name": "depositPercent",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "depositPercent Decimal? @db.Decimal(5, 2)"
      },
      {
        "name": "canDoubleBook",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "canDoubleBook Boolean   @default(false)"
      },
      {
        "name": "maxConcurrent",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "maxConcurrent Int       @default(1)"
      },
      {
        "name": "processingTime",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "processingTime Int?"
      },
      {
        "name": "bufferTime",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "15",
        "sourceLine": "bufferTime    Int?      @default(15)"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "business",
        "type": "Business",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business      Business  @relation(fields: [businessId], references: [id])"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId    String"
      },
      {
        "name": "category",
        "type": "ServiceCategory?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category      ServiceCategory? @relation(fields: [categoryId], references: [id])"
      },
      {
        "name": "categoryId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "categoryId    String?"
      },
      {
        "name": "addOns",
        "type": "ServiceAddOn[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "addOns        ServiceAddOn[]"
      },
      {
        "name": "appointmentServices",
        "type": "AppointmentService[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointmentServices AppointmentService[]"
      },
      {
        "name": "lineItems",
        "type": "TransactionLineItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lineItems     TransactionLineItem[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-service-add-on",
    "sourceProject": "beauty-wellness-ai",
    "name": "ServiceAddOn",
    "displayName": "Service Add On",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "duration",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration      Int"
      },
      {
        "name": "price",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price         Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "service",
        "type": "Service",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service       Service   @relation(fields: [serviceId], references: [id])"
      },
      {
        "name": "serviceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceId     String"
      },
      {
        "name": "appointmentAddOns",
        "type": "AppointmentAddOn[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointmentAddOns AppointmentAddOn[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-service-category",
    "sourceProject": "beauty-wellness-ai",
    "name": "ServiceCategory",
    "displayName": "Service Category",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "sortOrder",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sortOrder     Int       @default(0)"
      },
      {
        "name": "color",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color         String?"
      },
      {
        "name": "icon",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "icon          String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "business",
        "type": "Business",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business      Business  @relation(fields: [businessId], references: [id])"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId    String"
      },
      {
        "name": "services",
        "type": "Service[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "services      Service[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-service-formula",
    "sourceProject": "beauty-wellness-ai",
    "name": "ServiceFormula",
    "displayName": "Service Formula",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "serviceType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceType   String"
      },
      {
        "name": "formula",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "formula       String"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "lastUsed",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastUsed      DateTime?"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client        Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-settings",
    "sourceProject": "beauty-wellness-ai",
    "name": "Settings",
    "displayName": "Settings",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "\"default\"",
        "sourceLine": "id            String    @id @default(\"default\")"
      },
      {
        "name": "businessName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessName  String?"
      },
      {
        "name": "address",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address       String?"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email         String?"
      },
      {
        "name": "taxRate",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxRate       Decimal?  @db.Decimal(5, 4)"
      },
      {
        "name": "openTime",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "openTime      String?"
      },
      {
        "name": "closeTime",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "closeTime     String?"
      },
      {
        "name": "googleCalendarEnabled",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "googleCalendarEnabled Boolean @default(false)"
      },
      {
        "name": "quickbooksAccessToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quickbooksAccessToken String?"
      },
      {
        "name": "quickbooksRefreshToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quickbooksRefreshToken String?"
      },
      {
        "name": "quickbooksRealmId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quickbooksRealmId String?"
      },
      {
        "name": "quickbooksTokenExpiry",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quickbooksTokenExpiry DateTime?"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-skin-analysis",
    "sourceProject": "beauty-wellness-ai",
    "name": "SkinAnalysis",
    "displayName": "Skin Analysis",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String?"
      },
      {
        "name": "skinType",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "skinType      String?   // oily, dry, combination, normal, sensitive"
      },
      {
        "name": "concerns",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "concerns      String[]"
      },
      {
        "name": "age",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "age           Int?"
      },
      {
        "name": "lifestyle",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lifestyle     String?"
      },
      {
        "name": "currentRoutine",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentRoutine Json?"
      },
      {
        "name": "skinCondition",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "skinCondition Json?"
      },
      {
        "name": "recommendations",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations Json?"
      },
      {
        "name": "productSuggestions",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "productSuggestions Json?"
      },
      {
        "name": "routineAdvice",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "routineAdvice Json?"
      },
      {
        "name": "treatmentSuggestions",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "treatmentSuggestions Json?"
      },
      {
        "name": "imageUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl      String?"
      },
      {
        "name": "analysisResults",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analysisResults Json?"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-sleep-record",
    "sourceProject": "beauty-wellness-ai",
    "name": "SleepRecord",
    "displayName": "Sleep Record",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String?"
      },
      {
        "name": "date",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "date          DateTime  @default(now())"
      },
      {
        "name": "bedtime",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bedtime       String?"
      },
      {
        "name": "wakeTime",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "wakeTime      String?"
      },
      {
        "name": "sleepDuration",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sleepDuration Decimal?  @db.Decimal(4, 2)"
      },
      {
        "name": "sleepQuality",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sleepQuality  Int?      // 1-10"
      },
      {
        "name": "caffeineIntake",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "caffeineIntake Boolean  @default(false)"
      },
      {
        "name": "screenTime",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "screenTime    Int?      // minutes before bed"
      },
      {
        "name": "exercise",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "exercise      Boolean   @default(false)"
      },
      {
        "name": "stress",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stress        Int?      // 1-10"
      },
      {
        "name": "roomTemp",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "roomTemp      String?"
      },
      {
        "name": "noiseLevel",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "noiseLevel    String?"
      },
      {
        "name": "lightLevel",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lightLevel    String?"
      },
      {
        "name": "insights",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "insights      Json?"
      },
      {
        "name": "recommendations",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations Json?"
      },
      {
        "name": "sleepScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sleepScore    Int?      // 0-100"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-staff",
    "sourceProject": "beauty-wellness-ai",
    "name": "Staff",
    "displayName": "Staff",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "displayName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "displayName   String?"
      },
      {
        "name": "title",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title         String?"
      },
      {
        "name": "bio",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bio           String?"
      },
      {
        "name": "color",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color         String?"
      },
      {
        "name": "photo",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "photo         String?"
      },
      {
        "name": "specialties",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialties   String[]"
      },
      {
        "name": "serviceIds",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceIds    String[]"
      },
      {
        "name": "employmentType",
        "type": "EmploymentType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "EMPLOYEE",
        "sourceLine": "employmentType EmploymentType @default(EMPLOYEE)"
      },
      {
        "name": "hireDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hireDate      DateTime?"
      },
      {
        "name": "payType",
        "type": "PayType?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payType       PayType?"
      },
      {
        "name": "hourlyRate",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hourlyRate    Decimal?  @db.Decimal(10, 2)"
      },
      {
        "name": "commissionPct",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commissionPct Decimal?  @db.Decimal(5, 2)"
      },
      {
        "name": "productCommissionPct",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "productCommissionPct Decimal? @db.Decimal(5, 2)"
      },
      {
        "name": "boothRent",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "boothRent     Decimal?  @db.Decimal(10, 2)"
      },
      {
        "name": "rentFrequency",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rentFrequency String?"
      },
      {
        "name": "avgRating",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avgRating     Decimal?  @db.Decimal(3, 2)"
      },
      {
        "name": "reviewCount",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "reviewCount   Int       @default(0)"
      },
      {
        "name": "rebookRate",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rebookRate    Decimal?  @db.Decimal(5, 2)"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "acceptsWalkIns",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "acceptsWalkIns Boolean  @default(true)"
      },
      {
        "name": "isBookableOnline",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isBookableOnline Boolean @default(true)"
      },
      {
        "name": "googleCalendarToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "googleCalendarToken String?"
      },
      {
        "name": "googleRefreshToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "googleRefreshToken String?"
      },
      {
        "name": "googleCalendarId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "googleCalendarId String?"
      },
      {
        "name": "outlookCalendarToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outlookCalendarToken String?"
      },
      {
        "name": "outlookRefreshToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outlookRefreshToken  String?"
      },
      {
        "name": "outlookCalendarId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outlookCalendarId    String?"
      },
      {
        "name": "outlookTokenExpiry",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outlookTokenExpiry   DateTime?"
      },
      {
        "name": "stripeAccountId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripeAccountId     String?"
      },
      {
        "name": "stripeAccountStatus",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"not_connected\"",
        "sourceLine": "stripeAccountStatus String?   @default(\"not_connected\") // not_connected, pending, active, restricted"
      },
      {
        "name": "bankAccountHolder",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bankAccountHolder   String?   // Account holder name"
      },
      {
        "name": "bankName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bankName            String?   // Bank name"
      },
      {
        "name": "bankAccountLast4",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bankAccountLast4    String?   // Last 4 digits only (for display)"
      },
      {
        "name": "bankRoutingNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bankRoutingNumber   String?   // Routing number (consider encrypting in production)"
      },
      {
        "name": "bankAccountNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bankAccountNumber   String?   // Account number (consider encrypting in production)"
      },
      {
        "name": "bankAccountType",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"checking\"",
        "sourceLine": "bankAccountType     String?   @default(\"checking\") // checking, savings"
      },
      {
        "name": "payoutMethod",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"manual\"",
        "sourceLine": "payoutMethod        String?   @default(\"manual\") // stripe_connect, bank_transfer, check, manual"
      },
      {
        "name": "workingHours",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "workingHours  Json?"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user          User      @relation(fields: [userId], references: [id])"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "userId        String    @unique"
      },
      {
        "name": "location",
        "type": "Location",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location      Location  @relation(fields: [locationId], references: [id])"
      },
      {
        "name": "locationId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "locationId    String"
      },
      {
        "name": "schedules",
        "type": "StaffSchedule[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "schedules     StaffSchedule[]"
      },
      {
        "name": "timeOff",
        "type": "TimeOff[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeOff       TimeOff[]"
      },
      {
        "name": "appointments",
        "type": "Appointment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointments  Appointment[]"
      },
      {
        "name": "transactions",
        "type": "Transaction[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactions  Transaction[]"
      },
      {
        "name": "tips",
        "type": "Tip[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tips          Tip[]"
      },
      {
        "name": "commissions",
        "type": "Commission[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commissions   Commission[]"
      },
      {
        "name": "dailyCloseouts",
        "type": "DailyCloseout[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dailyCloseouts DailyCloseout[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-staff-schedule",
    "sourceProject": "beauty-wellness-ai",
    "name": "StaffSchedule",
    "displayName": "Staff Schedule",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "dayOfWeek",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dayOfWeek     Int"
      },
      {
        "name": "startTime",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startTime     String"
      },
      {
        "name": "endTime",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endTime       String"
      },
      {
        "name": "isWorking",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isWorking     Boolean   @default(true)"
      },
      {
        "name": "staff",
        "type": "Staff",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staff         Staff     @relation(fields: [staffId], references: [id])"
      },
      {
        "name": "staffId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staffId       String"
      },
      {
        "name": "breaks",
        "type": "ScheduleBreak[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "breaks        ScheduleBreak[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-src-lib-db-pass7-ts-suppliers",
    "sourceProject": "beauty-wellness-ai",
    "name": "suppliers",
    "displayName": "Suppliers",
    "framework": "SQL",
    "sourceFile": "src/lib/db-pass7.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "business_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business_id TEXT"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "contact_name",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_name TEXT"
      },
      {
        "name": "email",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email TEXT"
      },
      {
        "name": "phone",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone TEXT"
      },
      {
        "name": "address",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category TEXT"
      },
      {
        "name": "payment_terms",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_terms TEXT"
      },
      {
        "name": "lead_time_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lead_time_days INTEGER"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "active BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-symptom-check",
    "sourceProject": "beauty-wellness-ai",
    "name": "SymptomCheck",
    "displayName": "Symptom Check",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String?"
      },
      {
        "name": "sessionId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sessionId     String"
      },
      {
        "name": "symptoms",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "symptoms      String[]"
      },
      {
        "name": "duration",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration      String?"
      },
      {
        "name": "severity",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity      String?"
      },
      {
        "name": "additionalInfo",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "additionalInfo String?"
      },
      {
        "name": "possibleConditions",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "possibleConditions Json?"
      },
      {
        "name": "recommendations",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations   Json?"
      },
      {
        "name": "urgencyLevel",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "urgencyLevel     String?   // low, medium, high, emergency"
      },
      {
        "name": "shouldSeekCare",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "shouldSeekCare   Boolean   @default(false)"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-time-off",
    "sourceProject": "beauty-wellness-ai",
    "name": "TimeOff",
    "displayName": "Time Off",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type          String"
      },
      {
        "name": "startDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate     DateTime"
      },
      {
        "name": "endDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate       DateTime"
      },
      {
        "name": "allDay",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "allDay        Boolean   @default(true)"
      },
      {
        "name": "startTime",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startTime     String?"
      },
      {
        "name": "endTime",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endTime       String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"approved\"",
        "sourceLine": "status        String    @default(\"approved\")"
      },
      {
        "name": "staff",
        "type": "Staff",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staff         Staff     @relation(fields: [staffId], references: [id])"
      },
      {
        "name": "staffId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staffId       String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-tip",
    "sourceProject": "beauty-wellness-ai",
    "name": "Tip",
    "displayName": "Tip",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "amount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount        Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "method",
        "type": "PaymentMethod",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "method        PaymentMethod"
      },
      {
        "name": "transaction",
        "type": "Transaction",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction   Transaction @relation(fields: [transactionId], references: [id])"
      },
      {
        "name": "transactionId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactionId String"
      },
      {
        "name": "staff",
        "type": "Staff",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staff         Staff     @relation(fields: [staffId], references: [id])"
      },
      {
        "name": "staffId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staffId       String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-transaction",
    "sourceProject": "beauty-wellness-ai",
    "name": "Transaction",
    "displayName": "Transaction",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String          @id @default(cuid())"
      },
      {
        "name": "transactionNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "transactionNumber String      @unique"
      },
      {
        "name": "type",
        "type": "TransactionType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "SALE",
        "sourceLine": "type          TransactionType @default(SALE)"
      },
      {
        "name": "status",
        "type": "TransactionStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "COMPLETED",
        "sourceLine": "status        TransactionStatus @default(COMPLETED)"
      },
      {
        "name": "date",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "date          DateTime        @default(now())"
      },
      {
        "name": "subtotal",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal      Decimal         @db.Decimal(10, 2)"
      },
      {
        "name": "discountAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "discountAmount Decimal        @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "discountReason",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discountReason String?"
      },
      {
        "name": "taxAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "taxAmount     Decimal         @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "tipAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tipAmount     Decimal         @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "totalAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalAmount   Decimal         @db.Decimal(10, 2)"
      },
      {
        "name": "pointsEarned",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "pointsEarned  Int             @default(0)"
      },
      {
        "name": "pointsRedeemed",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "pointsRedeemed Int            @default(0)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "quickbooksCustomerId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quickbooksCustomerId String?"
      },
      {
        "name": "quickbooksInvoiceId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quickbooksInvoiceId String?"
      },
      {
        "name": "quickbooksPaymentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quickbooksPaymentId String?"
      },
      {
        "name": "quickbooksSyncedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quickbooksSyncedAt DateTime?"
      },
      {
        "name": "client",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client        Client?         @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String?"
      },
      {
        "name": "staff",
        "type": "Staff",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staff         Staff           @relation(fields: [staffId], references: [id])"
      },
      {
        "name": "staffId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staffId       String"
      },
      {
        "name": "location",
        "type": "Location",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location      Location        @relation(fields: [locationId], references: [id])"
      },
      {
        "name": "locationId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "locationId    String"
      },
      {
        "name": "appointment",
        "type": "Appointment?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointment   Appointment?    @relation(fields: [appointmentId], references: [id])"
      },
      {
        "name": "appointmentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "appointmentId String?         @unique"
      },
      {
        "name": "lineItems",
        "type": "TransactionLineItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lineItems     TransactionLineItem[]"
      },
      {
        "name": "payments",
        "type": "TransactionPayment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payments      TransactionPayment[]"
      },
      {
        "name": "tips",
        "type": "Tip[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tips          Tip[]"
      },
      {
        "name": "commissions",
        "type": "Commission[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commissions   Commission[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-transaction-line-item",
    "sourceProject": "beauty-wellness-ai",
    "name": "TransactionLineItem",
    "displayName": "Transaction Line Item",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "type",
        "type": "LineItemType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type          LineItemType"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "quantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "quantity      Int       @default(1)"
      },
      {
        "name": "unitPrice",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitPrice     Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "totalPrice",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalPrice    Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "performedById",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "performedById String?"
      },
      {
        "name": "transaction",
        "type": "Transaction",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction   Transaction @relation(fields: [transactionId], references: [id])"
      },
      {
        "name": "transactionId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactionId String"
      },
      {
        "name": "service",
        "type": "Service?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service       Service?  @relation(fields: [serviceId], references: [id])"
      },
      {
        "name": "serviceId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceId     String?"
      },
      {
        "name": "product",
        "type": "Product?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product       Product?  @relation(fields: [productId], references: [id])"
      },
      {
        "name": "productId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "productId     String?"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-transaction-payment",
    "sourceProject": "beauty-wellness-ai",
    "name": "TransactionPayment",
    "displayName": "Transaction Payment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String        @id @default(cuid())"
      },
      {
        "name": "method",
        "type": "PaymentMethod",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "method        PaymentMethod"
      },
      {
        "name": "amount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount        Decimal       @db.Decimal(10, 2)"
      },
      {
        "name": "reference",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reference     String?"
      },
      {
        "name": "stripePaymentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripePaymentId String?"
      },
      {
        "name": "giftCardId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "giftCardId    String?"
      },
      {
        "name": "transaction",
        "type": "Transaction",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction   Transaction   @relation(fields: [transactionId], references: [id])"
      },
      {
        "name": "transactionId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactionId String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-user",
    "sourceProject": "beauty-wellness-ai",
    "name": "User",
    "displayName": "User",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email         String    @unique"
      },
      {
        "name": "emailVerified",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "emailVerified DateTime?"
      },
      {
        "name": "password",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password      String?   // Optional for OAuth users"
      },
      {
        "name": "firstName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName     String"
      },
      {
        "name": "lastName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName      String"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "role",
        "type": "UserRole",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role          UserRole"
      },
      {
        "name": "language",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"en\"",
        "sourceLine": "language      String    @default(\"en\")"
      },
      {
        "name": "avatar",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatar        String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "permissions",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "permissions   Json?"
      },
      {
        "name": "business",
        "type": "Business?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business      Business?  @relation(fields: [businessId], references: [id])"
      },
      {
        "name": "businessId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId    String?    // Optional for PLATFORM_ADMIN and CLIENT roles"
      },
      {
        "name": "staff",
        "type": "Staff?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staff         Staff?"
      },
      {
        "name": "client",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client        Client?    // Link to client profile (for CLIENT role users)"
      },
      {
        "name": "resetToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resetToken       String?"
      },
      {
        "name": "resetTokenExpiry",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resetTokenExpiry DateTime?"
      },
      {
        "name": "auditLogs",
        "type": "AuditLog[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "auditLogs     AuditLog[]"
      },
      {
        "name": "savedFilters",
        "type": "SavedFilter[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "savedFilters  SavedFilter[]"
      },
      {
        "name": "accounts",
        "type": "Account[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accounts      Account[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-vendor",
    "sourceProject": "beauty-wellness-ai",
    "name": "Vendor",
    "displayName": "Vendor",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "contactName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contactName   String?"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email         String?"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "website",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "website       String?"
      },
      {
        "name": "address",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address       String?"
      },
      {
        "name": "city",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city          String?"
      },
      {
        "name": "state",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state         String?"
      },
      {
        "name": "zip",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zip           String?"
      },
      {
        "name": "country",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country       String?"
      },
      {
        "name": "paymentTerms",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paymentTerms  String?"
      },
      {
        "name": "accountNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountNumber String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId    String"
      },
      {
        "name": "purchaseOrders",
        "type": "PurchaseOrder[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchaseOrders PurchaseOrder[]"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-waitlist-entry",
    "sourceProject": "beauty-wellness-ai",
    "name": "WaitlistEntry",
    "displayName": "Waitlist Entry",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "position",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "position      Int"
      },
      {
        "name": "estimatedWait",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedWait Int?"
      },
      {
        "name": "status",
        "type": "WaitlistStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "WAITING",
        "sourceLine": "status        WaitlistStatus @default(WAITING)"
      },
      {
        "name": "serviceNotes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceNotes  String?"
      },
      {
        "name": "estimatedDuration",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedDuration Int?"
      },
      {
        "name": "addedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "addedAt       DateTime  @default(now())"
      },
      {
        "name": "seatedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seatedAt      DateTime?"
      },
      {
        "name": "leftAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "leftAt        DateTime?"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "notificationSent",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "notificationSent Boolean @default(false)"
      },
      {
        "name": "client",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client        Client?   @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String?"
      },
      {
        "name": "location",
        "type": "Location",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location      Location  @relation(fields: [locationId], references: [id])"
      },
      {
        "name": "locationId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "locationId    String"
      }
    ]
  },
  {
    "id": "beauty-wellness-ai-prisma-schema-prisma-wellness-audit-log",
    "sourceProject": "beauty-wellness-ai",
    "name": "WellnessAuditLog",
    "displayName": "Wellness Audit Log",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String   @id @default(cuid())"
      },
      {
        "name": "businessId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessId  String"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId    String?"
      },
      {
        "name": "userId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String?"
      },
      {
        "name": "feature",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature     String"
      },
      {
        "name": "action",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action      String   // viewed, created, exported, deleted"
      },
      {
        "name": "resourceId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resourceId  String?"
      },
      {
        "name": "metadata",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metadata    Json?"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-ai-audit-log",
    "sourceProject": "beautyWellnes",
    "name": "AIAuditLog",
    "displayName": "AI Audit Log",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String        @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId       String"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String?"
      },
      {
        "name": "contextType",
        "type": "AIContextType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contextType   AIContextType"
      },
      {
        "name": "inputSummary",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inputSummary  String"
      },
      {
        "name": "outputSummary",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outputSummary String"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon  Salon   @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "client",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client Client? @relation(fields: [clientId], references: [id], onDelete: SetNull)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-ai-result",
    "sourceProject": "beautyWellnes",
    "name": "AiResult",
    "displayName": "Ai Result",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String   @id @default(cuid())"
      },
      {
        "name": "feature",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature     String"
      },
      {
        "name": "salonId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId     String?"
      },
      {
        "name": "userId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String?"
      },
      {
        "name": "model",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model       String"
      },
      {
        "name": "input",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input       Json"
      },
      {
        "name": "output",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output      Json"
      },
      {
        "name": "tokens",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens      Int?"
      },
      {
        "name": "durationMs",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "durationMs  Int?"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-appointment",
    "sourceProject": "beautyWellnes",
    "name": "Appointment",
    "displayName": "Appointment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id           String            @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId      String"
      },
      {
        "name": "locationId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "locationId   String?           // null = unassigned location"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId     String"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId String"
      },
      {
        "name": "serviceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceId    String"
      },
      {
        "name": "startTime",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startTime    DateTime"
      },
      {
        "name": "endTime",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endTime      DateTime"
      },
      {
        "name": "status",
        "type": "AppointmentStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "BOOKED",
        "sourceLine": "status       AppointmentStatus @default(BOOKED)"
      },
      {
        "name": "source",
        "type": "AppointmentSource",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ONLINE",
        "sourceLine": "source       AppointmentSource @default(ONLINE)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes        String?"
      },
      {
        "name": "depositPaid",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "depositPaid  Boolean           @default(false)"
      },
      {
        "name": "depositAmount",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "depositAmount Float?"
      },
      {
        "name": "groupId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "groupId      String?           // For group appointments"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon            Salon             @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "location",
        "type": "Location?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location         Location?         @relation(fields: [locationId], references: [id], onDelete: SetNull)"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client           Client            @relation(fields: [clientId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "technician",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician       User              @relation(\"TechnicianAppointments\", fields: [technicianId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "service",
        "type": "Service",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service          Service           @relation(fields: [serviceId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "visit",
        "type": "Visit?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "visit            Visit?"
      },
      {
        "name": "payment",
        "type": "Payment?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment          Payment?"
      },
      {
        "name": "tip",
        "type": "Tip?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tip              Tip?"
      },
      {
        "name": "review",
        "type": "Review?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "review           Review?"
      },
      {
        "name": "noShowPrediction",
        "type": "NoShowPrediction?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "noShowPrediction NoShowPrediction?"
      },
      {
        "name": "services",
        "type": "AppointmentService[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "services         AppointmentService[] // Multi-service booking"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-appointment-service",
    "sourceProject": "beautyWellnes",
    "name": "AppointmentService",
    "displayName": "Appointment Service",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String   @id @default(cuid())"
      },
      {
        "name": "appointmentId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointmentId String"
      },
      {
        "name": "serviceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceId     String"
      },
      {
        "name": "price",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price         Float    // Price at time of booking"
      },
      {
        "name": "duration",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration      Int      // Duration in minutes"
      },
      {
        "name": "order",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "order         Int      @default(0) // Order of services"
      },
      {
        "name": "appointment",
        "type": "Appointment",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointment Appointment @relation(fields: [appointmentId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "service",
        "type": "Service",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service     Service     @relation(\"AppointmentServices\", fields: [serviceId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-booking-settings",
    "sourceProject": "beautyWellnes",
    "name": "BookingSettings",
    "displayName": "Booking Settings",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id                    String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "salonId               String   @unique"
      },
      {
        "name": "allowOnlineBooking",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "allowOnlineBooking    Boolean  @default(true)"
      },
      {
        "name": "requireDeposit",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "requireDeposit        Boolean  @default(false)"
      },
      {
        "name": "depositAmount",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "depositAmount         Float?"
      },
      {
        "name": "minAdvanceHours",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "2",
        "sourceLine": "minAdvanceHours       Int      @default(2)"
      },
      {
        "name": "maxAdvanceDays",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "30",
        "sourceLine": "maxAdvanceDays        Int      @default(30)"
      },
      {
        "name": "allowWalkIns",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "allowWalkIns          Boolean  @default(true)"
      },
      {
        "name": "confirmationRequired",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "confirmationRequired  Boolean  @default(true)"
      },
      {
        "name": "reminderHoursBefore",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "24",
        "sourceLine": "reminderHoursBefore   Int      @default(24)"
      },
      {
        "name": "cancellationHours",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "24",
        "sourceLine": "cancellationHours     Int      @default(24)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-campaign",
    "sourceProject": "beautyWellnes",
    "name": "Campaign",
    "displayName": "Campaign",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String         @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId       String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "type",
        "type": "CampaignType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type          CampaignType"
      },
      {
        "name": "audienceQuery",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "audienceQuery Json?"
      },
      {
        "name": "status",
        "type": "CampaignStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status        CampaignStatus @default(ACTIVE)"
      },
      {
        "name": "scheduledAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledAt   DateTime?      // When to send this campaign"
      },
      {
        "name": "sentAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sentAt        DateTime?      // When it was actually sent"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon    Salon             @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "messages",
        "type": "CampaignMessage[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "messages CampaignMessage[]"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-campaign-message",
    "sourceProject": "beautyWellnes",
    "name": "CampaignMessage",
    "displayName": "Campaign Message",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String        @id @default(cuid())"
      },
      {
        "name": "campaignId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaignId  String"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId    String"
      },
      {
        "name": "channel",
        "type": "MessageChannel",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "channel     MessageChannel"
      },
      {
        "name": "language",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"en\"",
        "sourceLine": "language    String        @default(\"en\")"
      },
      {
        "name": "scheduledAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledAt DateTime"
      },
      {
        "name": "sentAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sentAt      DateTime?"
      },
      {
        "name": "status",
        "type": "MessageStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status      MessageStatus @default(PENDING)"
      },
      {
        "name": "body",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body        String"
      },
      {
        "name": "campaign",
        "type": "Campaign",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaign Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client   Client   @relation(fields: [clientId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-chat-message",
    "sourceProject": "beautyWellnes",
    "name": "ChatMessage",
    "displayName": "Chat Message",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId       String"
      },
      {
        "name": "sessionId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sessionId     String   // Groups messages in a conversation"
      },
      {
        "name": "role",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role          String   // 'user' or 'assistant'"
      },
      {
        "name": "content",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content       String"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String?"
      },
      {
        "name": "metadata",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metadata      Json?    // Store any additional context"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon  Salon   @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "client",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client Client? @relation(fields: [clientId], references: [id], onDelete: SetNull)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-client",
    "sourceProject": "beautyWellnes",
    "name": "Client",
    "displayName": "Client",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id                String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId           String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name              String"
      },
      {
        "name": "phone",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone             String"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email             String?"
      },
      {
        "name": "preferredTechId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "preferredTechId   String?"
      },
      {
        "name": "preferredLanguage",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"en\"",
        "sourceLine": "preferredLanguage String   @default(\"en\")"
      },
      {
        "name": "marketingOptIn",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "marketingOptIn    Boolean  @default(true)"
      },
      {
        "name": "birthday",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "birthday          DateTime?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes             String?"
      },
      {
        "name": "allergies",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "allergies         String?  // Allergies/sensitivities"
      },
      {
        "name": "referralSource",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referralSource    String?  // How they found us"
      },
      {
        "name": "familyId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "familyId          String?  // Link to family/household"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon                 Salon                  @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "preferredTech",
        "type": "User?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "preferredTech         User?                  @relation(\"PreferredTechnician\", fields: [preferredTechId], references: [id], onDelete: SetNull)"
      },
      {
        "name": "family",
        "type": "ClientFamily?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "family                ClientFamily?          @relation(\"FamilyMembers\", fields: [familyId], references: [id], onDelete: SetNull)"
      },
      {
        "name": "appointments",
        "type": "Appointment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointments          Appointment[]"
      },
      {
        "name": "visits",
        "type": "Visit[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "visits                Visit[]"
      },
      {
        "name": "loyaltyAccount",
        "type": "LoyaltyAccount?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "loyaltyAccount        LoyaltyAccount?"
      },
      {
        "name": "campaignMessages",
        "type": "CampaignMessage[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaignMessages      CampaignMessage[]"
      },
      {
        "name": "aiAuditLogs",
        "type": "AIAuditLog[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiAuditLogs           AIAuditLog[]"
      },
      {
        "name": "giftCards",
        "type": "GiftCard[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "giftCards             GiftCard[]"
      },
      {
        "name": "waitlistEntries",
        "type": "Waitlist[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "waitlistEntries       Waitlist[]"
      },
      {
        "name": "payments",
        "type": "Payment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payments              Payment[]"
      },
      {
        "name": "recurringAppointments",
        "type": "RecurringAppointment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recurringAppointments RecurringAppointment[]"
      },
      {
        "name": "chatMessages",
        "type": "ChatMessage[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "chatMessages          ChatMessage[]"
      },
      {
        "name": "reviews",
        "type": "Review[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviews               Review[]"
      },
      {
        "name": "retailSales",
        "type": "RetailSale[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retailSales           RetailSale[]"
      },
      {
        "name": "packageSales",
        "type": "PackageSale[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "packageSales          PackageSale[]"
      },
      {
        "name": "memberships",
        "type": "Membership[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "memberships           Membership[]"
      },
      {
        "name": "referralsGiven",
        "type": "Referral[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referralsGiven        Referral[]             @relation(\"ReferredBy\")"
      },
      {
        "name": "referredBy",
        "type": "Referral?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referredBy            Referral?              @relation(\"ReferredClients\")"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-client-family",
    "sourceProject": "beautyWellnes",
    "name": "ClientFamily",
    "displayName": "Client Family",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id        String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId   String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name      String   // Family name, e.g., \"The Smiths\""
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon   Salon    @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "members",
        "type": "Client[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "members Client[] @relation(\"FamilyMembers\")"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-commission",
    "sourceProject": "beautyWellnes",
    "name": "Commission",
    "displayName": "Commission",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id           String         @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId      String"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId String"
      },
      {
        "name": "appointmentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointmentId String?"
      },
      {
        "name": "serviceAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceAmount Float         // Service revenue"
      },
      {
        "name": "productAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "productAmount Float         @default(0) // Product revenue"
      },
      {
        "name": "tipAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tipAmount    Float          @default(0)"
      },
      {
        "name": "commissionRate",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commissionRate Float        // Percentage (e.g., 0.45 for 45%)"
      },
      {
        "name": "commissionAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commissionAmount Float      // Calculated commission"
      },
      {
        "name": "period",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period       String         // e.g., \"2024-01\" for monthly"
      },
      {
        "name": "status",
        "type": "CommissionStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status       CommissionStatus @default(PENDING)"
      },
      {
        "name": "paidAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paidAt       DateTime?"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon      Salon @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "technician",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician User  @relation(\"TechnicianCommissions\", fields: [technicianId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-commission-rule",
    "sourceProject": "beautyWellnes",
    "name": "CommissionRule",
    "displayName": "Commission Rule",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id           String  @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId      String"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId String"
      },
      {
        "name": "serviceRate",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.45",
        "sourceLine": "serviceRate  Float   @default(0.45) // 45% default"
      },
      {
        "name": "productRate",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.10",
        "sourceLine": "productRate  Float   @default(0.10) // 10% on products"
      },
      {
        "name": "tipRate",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1.0",
        "sourceLine": "tipRate      Float   @default(1.0)  // 100% of tips"
      },
      {
        "name": "active",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active       Boolean @default(true)"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon      Salon @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "technician",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician User  @relation(\"TechnicianCommissionRules\", fields: [technicianId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-email-log",
    "sourceProject": "beautyWellnes",
    "name": "EmailLog",
    "displayName": "Email Log",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId     String"
      },
      {
        "name": "toEmail",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "toEmail     String"
      },
      {
        "name": "fromEmail",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fromEmail   String?"
      },
      {
        "name": "subject",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject     String"
      },
      {
        "name": "body",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body        String"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status      String"
      },
      {
        "name": "provider",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider    String?  // sendgrid, ses, etc."
      },
      {
        "name": "externalId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "externalId  String?"
      },
      {
        "name": "errorMsg",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "errorMsg    String?"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-gallery-photo",
    "sourceProject": "beautyWellnes",
    "name": "GalleryPhoto",
    "displayName": "Gallery Photo",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id           String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId      String"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId String"
      },
      {
        "name": "visitId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "visitId      String?"
      },
      {
        "name": "imageUrl",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl     String"
      },
      {
        "name": "thumbnailUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "thumbnailUrl String?"
      },
      {
        "name": "title",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title        String?"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description  String?"
      },
      {
        "name": "tags",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags         String[]"
      },
      {
        "name": "featured",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "featured     Boolean  @default(false)"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon      Salon @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "technician",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician User  @relation(fields: [technicianId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-src-app-api-gap-nonai-beautywellnes-wearables-integration-route-ts-gap-features",
    "sourceProject": "beautyWellnes",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-nonai-beautywellnes/wearables-integration/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellnes-src-app-api-gap-nonai-beautywellnes-supplier-vendor-module-route-ts-gap-features",
    "sourceProject": "beautyWellnes",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-nonai-beautywellnes/supplier-vendor-module/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellnes-src-app-api-gap-nonai-beautywellnes-quickbooks-accounting-integration-route-ts-gap-features",
    "sourceProject": "beautyWellnes",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-nonai-beautywellnes/quickbooks-accounting-integration/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellnes-src-app-api-gap-nonai-beautywellnes-marketplace-listings-route-ts-gap-features",
    "sourceProject": "beautyWellnes",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-nonai-beautywellnes/marketplace-listings/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellnes-src-app-api-gap-nonai-beautywellnes-facility-maintenance-scheduling-route-ts-gap-features",
    "sourceProject": "beautyWellnes",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-nonai-beautywellnes/facility-maintenance-scheduling/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellnes-src-app-api-gap-nonai-beautywellnes-corporate-wellness-program-endpoints-route-ts-gap-features",
    "sourceProject": "beautyWellnes",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-nonai-beautywellnes/corporate-wellness-program-endpoints/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellnes-src-app-api-gap-ai-beautywellnes-wearables-driven-wellness-ai-route-ts-gap-features",
    "sourceProject": "beautyWellnes",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-ai-beautywellnes/wearables-driven-wellness-ai/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellnes-src-app-api-gap-ai-beautywellnes-ai-facility-maintenance-scheduling-route-ts-gap-features",
    "sourceProject": "beautyWellnes",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-ai-beautywellnes/ai-facility-maintenance-scheduling/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellnes-src-app-api-gap-ai-beautywellnes-ai-consent-form-capture-only-present-in-beauty-wellness-ai-route-ts-gap-features",
    "sourceProject": "beautyWellnes",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-ai-beautywellnes/ai-consent-form-capture-only-present-in-beauty-wellness-ai/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-gift-card",
    "sourceProject": "beautyWellnes",
    "name": "GiftCard",
    "displayName": "Gift Card",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id           String         @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId      String"
      },
      {
        "name": "code",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "code         String         @unique"
      },
      {
        "name": "initialValue",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "initialValue Float"
      },
      {
        "name": "balance",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "balance      Float"
      },
      {
        "name": "purchasedBy",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchasedBy  String?"
      },
      {
        "name": "recipientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipientId  String?"
      },
      {
        "name": "status",
        "type": "GiftCardStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status       GiftCardStatus @default(ACTIVE)"
      },
      {
        "name": "expiresAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiresAt    DateTime?"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon     Salon    @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "recipient",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipient Client?  @relation(fields: [recipientId], references: [id], onDelete: SetNull)"
      },
      {
        "name": "payments",
        "type": "Payment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payments  Payment[]"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-inventory-item",
    "sourceProject": "beautyWellnes",
    "name": "InventoryItem",
    "displayName": "Inventory Item",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id           String            @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId      String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name         String"
      },
      {
        "name": "sku",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sku          String?"
      },
      {
        "name": "category",
        "type": "InventoryCategory",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category     InventoryCategory"
      },
      {
        "name": "quantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "quantity     Int               @default(0)"
      },
      {
        "name": "minQuantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5",
        "sourceLine": "minQuantity  Int               @default(5)"
      },
      {
        "name": "costPrice",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "costPrice    Float?"
      },
      {
        "name": "retailPrice",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retailPrice  Float?"
      },
      {
        "name": "supplier",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier     String?"
      },
      {
        "name": "active",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active       Boolean           @default(true)"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon        Salon                  @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "transactions",
        "type": "InventoryTransaction[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactions InventoryTransaction[]"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-inventory-transaction",
    "sourceProject": "beautyWellnes",
    "name": "InventoryTransaction",
    "displayName": "Inventory Transaction",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "inventoryItemId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inventoryItemId String"
      },
      {
        "name": "quantityChange",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantityChange  Int"
      },
      {
        "name": "reason",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason          String?"
      },
      {
        "name": "performedBy",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "performedBy     String?"
      },
      {
        "name": "inventoryItem",
        "type": "InventoryItem",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inventoryItem InventoryItem @relation(fields: [inventoryItemId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-location",
    "sourceProject": "beautyWellnes",
    "name": "Location",
    "displayName": "Location",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id        String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId   String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name      String"
      },
      {
        "name": "address",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address   String"
      },
      {
        "name": "phone",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone     String"
      },
      {
        "name": "timezone",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"America/New_York\"",
        "sourceLine": "timezone  String   @default(\"America/New_York\")"
      },
      {
        "name": "active",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active    Boolean  @default(true)"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon        Salon         @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "appointments",
        "type": "Appointment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointments Appointment[]"
      },
      {
        "name": "staff",
        "type": "User[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staff        User[]        @relation(\"UserLocation\")"
      },
      {
        "name": "services",
        "type": "Service[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "services     Service[]     @relation(\"ServiceLocation\")"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-loyalty-account",
    "sourceProject": "beautyWellnes",
    "name": "LoyaltyAccount",
    "displayName": "Loyalty Account",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String      @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId       String"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "clientId      String      @unique"
      },
      {
        "name": "pointsBalance",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "pointsBalance Int         @default(0)"
      },
      {
        "name": "tier",
        "type": "LoyaltyTier",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "BRONZE",
        "sourceLine": "tier          LoyaltyTier @default(BRONZE)"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon        Salon                @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client       Client               @relation(fields: [clientId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "transactions",
        "type": "LoyaltyTransaction[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactions LoyaltyTransaction[]"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-loyalty-transaction",
    "sourceProject": "beautyWellnes",
    "name": "LoyaltyTransaction",
    "displayName": "Loyalty Transaction",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id               String                 @id @default(cuid())"
      },
      {
        "name": "loyaltyAccountId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "loyaltyAccountId String"
      },
      {
        "name": "type",
        "type": "LoyaltyTransactionType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type             LoyaltyTransactionType"
      },
      {
        "name": "points",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "points           Int"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description      String?"
      },
      {
        "name": "loyaltyAccount",
        "type": "LoyaltyAccount",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "loyaltyAccount LoyaltyAccount @relation(fields: [loyaltyAccountId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-membership",
    "sourceProject": "beautyWellnes",
    "name": "Membership",
    "displayName": "Membership",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id           String           @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId      String"
      },
      {
        "name": "planId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "planId       String"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId     String"
      },
      {
        "name": "status",
        "type": "MembershipStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status       MembershipStatus @default(ACTIVE)"
      },
      {
        "name": "startDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "startDate    DateTime         @default(now())"
      },
      {
        "name": "endDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate      DateTime?"
      },
      {
        "name": "billingCycle",
        "type": "BillingCycle",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "MONTHLY",
        "sourceLine": "billingCycle BillingCycle     @default(MONTHLY)"
      },
      {
        "name": "nextBillDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nextBillDate DateTime?"
      },
      {
        "name": "servicesUsed",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "servicesUsed Json?            // Track used free services this period"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon  Salon          @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "plan",
        "type": "MembershipPlan",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plan   MembershipPlan @relation(fields: [planId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client Client         @relation(fields: [clientId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-membership-plan",
    "sourceProject": "beautyWellnes",
    "name": "MembershipPlan",
    "displayName": "Membership Plan",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id             String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId        String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name           String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description    String?"
      },
      {
        "name": "monthlyPrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthlyPrice   Float"
      },
      {
        "name": "annualPrice",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annualPrice    Float?   // Optional annual pricing"
      },
      {
        "name": "benefits",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "benefits       Json     // Array of benefit descriptions"
      },
      {
        "name": "discountPercent",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "discountPercent Float   @default(0) // Discount on services"
      },
      {
        "name": "freeServices",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "freeServices   Json?    // e.g., {\"manicure\": 2, \"pedicure\": 1} per month"
      },
      {
        "name": "active",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active         Boolean  @default(true)"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon       Salon        @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "memberships",
        "type": "Membership[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "memberships Membership[]"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-no-show-prediction",
    "sourceProject": "beautyWellnes",
    "name": "NoShowPrediction",
    "displayName": "No Show Prediction",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId       String"
      },
      {
        "name": "appointmentId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "appointmentId String   @unique"
      },
      {
        "name": "riskScore",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "riskScore     Float    // 0-1 probability"
      },
      {
        "name": "riskLevel",
        "type": "RiskLevel",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "riskLevel     RiskLevel"
      },
      {
        "name": "factors",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "factors       Json     // Factors that contributed to score"
      },
      {
        "name": "notified",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "notified      Boolean  @default(false)"
      },
      {
        "name": "outcome",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outcome       String?  // SHOWED, NO_SHOW, CANCELLED"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon       Salon       @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "appointment",
        "type": "Appointment",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointment Appointment @relation(fields: [appointmentId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-notification-subscription",
    "sourceProject": "beautyWellnes",
    "name": "NotificationSubscription",
    "displayName": "Notification Subscription",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id        String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId   String"
      },
      {
        "name": "userId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId    String?"
      },
      {
        "name": "endpoint",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint  String   // Push subscription endpoint or WebSocket ID"
      },
      {
        "name": "type",
        "type": "NotificationType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type      NotificationType"
      },
      {
        "name": "active",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active    Boolean  @default(true)"
      },
      {
        "name": "metadata",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metadata  Json?    // Keys, auth tokens, etc."
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-package-sale",
    "sourceProject": "beautyWellnes",
    "name": "PackageSale",
    "displayName": "Package Sale",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String    @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId     String"
      },
      {
        "name": "packageId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "packageId   String"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId    String"
      },
      {
        "name": "purchaseDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "purchaseDate DateTime @default(now())"
      },
      {
        "name": "expiresAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiresAt   DateTime"
      },
      {
        "name": "amountPaid",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amountPaid  Float"
      },
      {
        "name": "servicesRemaining",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "servicesRemaining Json // Track remaining services"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon   Salon          @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "package",
        "type": "ServicePackage",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "package ServicePackage @relation(fields: [packageId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client  Client         @relation(fields: [clientId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-package-service",
    "sourceProject": "beautyWellnes",
    "name": "PackageService",
    "displayName": "Package Service",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id        String @id @default(cuid())"
      },
      {
        "name": "packageId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "packageId String"
      },
      {
        "name": "serviceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceId String"
      },
      {
        "name": "quantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "quantity  Int    @default(1) // How many of this service included"
      },
      {
        "name": "package",
        "type": "ServicePackage",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "package ServicePackage @relation(fields: [packageId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "service",
        "type": "Service",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service Service        @relation(fields: [serviceId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-payment",
    "sourceProject": "beautyWellnes",
    "name": "Payment",
    "displayName": "Payment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String        @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId       String"
      },
      {
        "name": "appointmentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "appointmentId String?       @unique"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String"
      },
      {
        "name": "amount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount        Float"
      },
      {
        "name": "method",
        "type": "PaymentMethod",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "method        PaymentMethod"
      },
      {
        "name": "status",
        "type": "PaymentStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status        PaymentStatus @default(PENDING)"
      },
      {
        "name": "giftCardId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "giftCardId    String?"
      },
      {
        "name": "stripeId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripeId      String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon       Salon        @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "appointment",
        "type": "Appointment?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointment Appointment? @relation(fields: [appointmentId], references: [id], onDelete: SetNull)"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client      Client       @relation(fields: [clientId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "giftCard",
        "type": "GiftCard?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "giftCard    GiftCard?    @relation(fields: [giftCardId], references: [id], onDelete: SetNull)"
      },
      {
        "name": "splits",
        "type": "PaymentSplit[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "splits      PaymentSplit[] // For split payments"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-payment-split",
    "sourceProject": "beautyWellnes",
    "name": "PaymentSplit",
    "displayName": "Payment Split",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id        String        @id @default(cuid())"
      },
      {
        "name": "paymentId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paymentId String"
      },
      {
        "name": "method",
        "type": "PaymentMethod",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "method    PaymentMethod"
      },
      {
        "name": "amount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount    Float"
      },
      {
        "name": "reference",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reference String?       // Card last 4, gift card code, etc."
      },
      {
        "name": "payment",
        "type": "Payment",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment Payment @relation(fields: [paymentId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-recurring-appointment",
    "sourceProject": "beautyWellnes",
    "name": "RecurringAppointment",
    "displayName": "Recurring Appointment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId         String"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId    String"
      },
      {
        "name": "serviceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceId       String"
      },
      {
        "name": "frequency",
        "type": "RecurringFrequency",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "frequency       RecurringFrequency"
      },
      {
        "name": "dayOfWeek",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dayOfWeek       Int?     // 0-6 for weekly"
      },
      {
        "name": "dayOfMonth",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dayOfMonth      Int?     // 1-31 for monthly"
      },
      {
        "name": "preferredTime",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "preferredTime   String   // e.g., \"10:00\""
      },
      {
        "name": "startDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate       DateTime"
      },
      {
        "name": "endDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate         DateTime?"
      },
      {
        "name": "active",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active          Boolean  @default(true)"
      },
      {
        "name": "nextOccurrence",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nextOccurrence  DateTime?"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon      Salon   @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client     Client  @relation(fields: [clientId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "technician",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician User    @relation(\"RecurringTechnician\", fields: [technicianId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "service",
        "type": "Service",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service    Service @relation(fields: [serviceId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-referral",
    "sourceProject": "beautyWellnes",
    "name": "Referral",
    "displayName": "Referral",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id             String        @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId        String"
      },
      {
        "name": "referrerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referrerId     String        // Client who referred"
      },
      {
        "name": "referredId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referredId     String        // New client"
      },
      {
        "name": "status",
        "type": "ReferralStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status         ReferralStatus @default(PENDING)"
      },
      {
        "name": "rewardType",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rewardType     String?       // e.g., \"points\", \"discount\", \"free_service\""
      },
      {
        "name": "rewardValue",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rewardValue    Float?"
      },
      {
        "name": "rewardGivenAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rewardGivenAt  DateTime?"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon    Salon  @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "referrer",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referrer Client @relation(\"ReferredBy\", fields: [referrerId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "referred",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referred Client @relation(\"ReferredClients\", fields: [referredId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-retail-product",
    "sourceProject": "beautyWellnes",
    "name": "RetailProduct",
    "displayName": "Retail Product",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId     String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name        String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String?"
      },
      {
        "name": "sku",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sku         String?"
      },
      {
        "name": "barcode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "barcode     String?"
      },
      {
        "name": "category",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category    String?"
      },
      {
        "name": "brand",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brand       String?"
      },
      {
        "name": "costPrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "costPrice   Float"
      },
      {
        "name": "retailPrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retailPrice Float"
      },
      {
        "name": "quantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "quantity    Int      @default(0)"
      },
      {
        "name": "minQuantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5",
        "sourceLine": "minQuantity Int      @default(5)"
      },
      {
        "name": "imageUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl    String?"
      },
      {
        "name": "active",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active      Boolean  @default(true)"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon Salon        @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "sales",
        "type": "RetailSale[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sales RetailSale[]"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-retail-sale",
    "sourceProject": "beautyWellnes",
    "name": "RetailSale",
    "displayName": "Retail Sale",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId     String"
      },
      {
        "name": "productId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "productId   String"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId    String?"
      },
      {
        "name": "soldById",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "soldById    String?  // Staff who made the sale"
      },
      {
        "name": "quantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity    Int"
      },
      {
        "name": "unitPrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitPrice   Float"
      },
      {
        "name": "totalPrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalPrice  Float"
      },
      {
        "name": "paymentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paymentId   String?"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon   Salon         @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "product",
        "type": "RetailProduct",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product RetailProduct @relation(fields: [productId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "client",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client  Client?       @relation(fields: [clientId], references: [id], onDelete: SetNull)"
      },
      {
        "name": "soldBy",
        "type": "User?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "soldBy  User?         @relation(\"SalesByUser\", fields: [soldById], references: [id], onDelete: SetNull)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-review",
    "sourceProject": "beautyWellnes",
    "name": "Review",
    "displayName": "Review",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id           String       @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId      String"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId     String?"
      },
      {
        "name": "appointmentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "appointmentId String?     @unique"
      },
      {
        "name": "platform",
        "type": "ReviewPlatform",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "platform     ReviewPlatform"
      },
      {
        "name": "rating",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating       Int          // 1-5"
      },
      {
        "name": "content",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content      String?"
      },
      {
        "name": "response",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response     String?      // Salon's response"
      },
      {
        "name": "respondedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "respondedAt  DateTime?"
      },
      {
        "name": "externalId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "externalId   String?      // ID from Google/Yelp"
      },
      {
        "name": "reviewDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "reviewDate   DateTime     @default(now())"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon       Salon        @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "client",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client      Client?      @relation(fields: [clientId], references: [id], onDelete: SetNull)"
      },
      {
        "name": "appointment",
        "type": "Appointment?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointment Appointment? @relation(fields: [appointmentId], references: [id], onDelete: SetNull)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-salon",
    "sourceProject": "beautyWellnes",
    "name": "Salon",
    "displayName": "Salon",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "address",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address         String"
      },
      {
        "name": "phone",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone           String"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email           String"
      },
      {
        "name": "timezone",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"America/New_York\"",
        "sourceLine": "timezone        String   @default(\"America/New_York\")"
      },
      {
        "name": "primaryLanguage",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"en\"",
        "sourceLine": "primaryLanguage String   @default(\"en\")"
      },
      {
        "name": "locations",
        "type": "Location[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "locations                Location[]"
      },
      {
        "name": "users",
        "type": "User[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "users                    User[]"
      },
      {
        "name": "services",
        "type": "Service[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "services                 Service[]"
      },
      {
        "name": "clients",
        "type": "Client[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clients                  Client[]"
      },
      {
        "name": "appointments",
        "type": "Appointment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointments             Appointment[]"
      },
      {
        "name": "loyaltyAccounts",
        "type": "LoyaltyAccount[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "loyaltyAccounts          LoyaltyAccount[]"
      },
      {
        "name": "staffSchedules",
        "type": "StaffSchedule[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staffSchedules           StaffSchedule[]"
      },
      {
        "name": "campaigns",
        "type": "Campaign[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaigns                Campaign[]"
      },
      {
        "name": "tasks",
        "type": "Task[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tasks                    Task[]"
      },
      {
        "name": "aiAuditLogs",
        "type": "AIAuditLog[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiAuditLogs              AIAuditLog[]"
      },
      {
        "name": "inventoryItems",
        "type": "InventoryItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inventoryItems           InventoryItem[]"
      },
      {
        "name": "giftCards",
        "type": "GiftCard[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "giftCards                GiftCard[]"
      },
      {
        "name": "waitlistEntries",
        "type": "Waitlist[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "waitlistEntries          Waitlist[]"
      },
      {
        "name": "payments",
        "type": "Payment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payments                 Payment[]"
      },
      {
        "name": "tips",
        "type": "Tip[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tips                     Tip[]"
      },
      {
        "name": "galleryPhotos",
        "type": "GalleryPhoto[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "galleryPhotos            GalleryPhoto[]"
      },
      {
        "name": "serviceAddons",
        "type": "ServiceAddon[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceAddons            ServiceAddon[]"
      },
      {
        "name": "recurringAppointments",
        "type": "RecurringAppointment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recurringAppointments    RecurringAppointment[]"
      },
      {
        "name": "chatMessages",
        "type": "ChatMessage[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "chatMessages             ChatMessage[]"
      },
      {
        "name": "reviews",
        "type": "Review[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviews                  Review[]"
      },
      {
        "name": "noShowPredictions",
        "type": "NoShowPrediction[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "noShowPredictions        NoShowPrediction[]"
      },
      {
        "name": "servicePricings",
        "type": "ServicePricing[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "servicePricings          ServicePricing[]"
      },
      {
        "name": "commissions",
        "type": "Commission[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commissions              Commission[]"
      },
      {
        "name": "commissionRules",
        "type": "CommissionRule[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commissionRules          CommissionRule[]"
      },
      {
        "name": "retailProducts",
        "type": "RetailProduct[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retailProducts           RetailProduct[]"
      },
      {
        "name": "retailSales",
        "type": "RetailSale[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retailSales              RetailSale[]"
      },
      {
        "name": "servicePackages",
        "type": "ServicePackage[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "servicePackages          ServicePackage[]"
      },
      {
        "name": "packageSales",
        "type": "PackageSale[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "packageSales             PackageSale[]"
      },
      {
        "name": "membershipPlans",
        "type": "MembershipPlan[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "membershipPlans          MembershipPlan[]"
      },
      {
        "name": "memberships",
        "type": "Membership[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "memberships              Membership[]"
      },
      {
        "name": "timeOffRequests",
        "type": "TimeOffRequest[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeOffRequests          TimeOffRequest[]"
      },
      {
        "name": "technicianSkills",
        "type": "TechnicianSkill[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianSkills         TechnicianSkill[]"
      },
      {
        "name": "stations",
        "type": "Station[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stations                 Station[]"
      },
      {
        "name": "clientFamilies",
        "type": "ClientFamily[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientFamilies           ClientFamily[]"
      },
      {
        "name": "referrals",
        "type": "Referral[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referrals                Referral[]"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-service",
    "sourceProject": "beautyWellnes",
    "name": "Service",
    "displayName": "Service",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String          @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId         String"
      },
      {
        "name": "locationId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "locationId      String?         // null = available at all locations"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "category",
        "type": "ServiceCategory",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "OTHER",
        "sourceLine": "category        ServiceCategory @default(OTHER)"
      },
      {
        "name": "durationMinutes",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "durationMinutes Int"
      },
      {
        "name": "basePrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "basePrice       Float"
      },
      {
        "name": "active",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active          Boolean         @default(true)"
      },
      {
        "name": "imageUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl        String?         // Service image"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon                 Salon                  @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "location",
        "type": "Location?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location              Location?              @relation(\"ServiceLocation\", fields: [locationId], references: [id], onDelete: SetNull)"
      },
      {
        "name": "appointments",
        "type": "Appointment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointments          Appointment[]"
      },
      {
        "name": "addons",
        "type": "ServiceAddon[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "addons                ServiceAddon[]"
      },
      {
        "name": "recurringAppointments",
        "type": "RecurringAppointment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recurringAppointments RecurringAppointment[]"
      },
      {
        "name": "pricingTiers",
        "type": "ServicePricing[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pricingTiers          ServicePricing[]"
      },
      {
        "name": "appointmentServices",
        "type": "AppointmentService[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointmentServices   AppointmentService[]   @relation(\"AppointmentServices\")"
      },
      {
        "name": "packageServices",
        "type": "PackageService[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "packageServices       PackageService[]"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-service-addon",
    "sourceProject": "beautyWellnes",
    "name": "ServiceAddon",
    "displayName": "Service Addon",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId     String"
      },
      {
        "name": "serviceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceId   String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name        String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String?"
      },
      {
        "name": "price",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price       Float"
      },
      {
        "name": "duration",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "duration    Int      @default(0) // Additional minutes"
      },
      {
        "name": "active",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active      Boolean  @default(true)"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon   Salon   @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "service",
        "type": "Service",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service Service @relation(fields: [serviceId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-service-package",
    "sourceProject": "beautyWellnes",
    "name": "ServicePackage",
    "displayName": "Service Package",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId     String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name        String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String?"
      },
      {
        "name": "price",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price       Float    // Discounted package price"
      },
      {
        "name": "validDays",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "365",
        "sourceLine": "validDays   Int      @default(365) // Days until expiry"
      },
      {
        "name": "active",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active      Boolean  @default(true)"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon    Salon                  @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "services",
        "type": "PackageService[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "services PackageService[]"
      },
      {
        "name": "sales",
        "type": "PackageSale[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sales    PackageSale[]"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-service-pricing",
    "sourceProject": "beautyWellnes",
    "name": "ServicePricing",
    "displayName": "Service Pricing",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id         String          @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId    String"
      },
      {
        "name": "serviceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceId  String"
      },
      {
        "name": "level",
        "type": "TechnicianLevel",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "level      TechnicianLevel"
      },
      {
        "name": "price",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price      Float"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon   Salon   @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "service",
        "type": "Service",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service Service @relation(fields: [serviceId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-sms-log",
    "sourceProject": "beautyWellnes",
    "name": "SMSLog",
    "displayName": "SMS Log",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId     String"
      },
      {
        "name": "toPhone",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "toPhone     String"
      },
      {
        "name": "fromPhone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fromPhone   String?"
      },
      {
        "name": "message",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message     String"
      },
      {
        "name": "twilioSid",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "twilioSid   String?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status      String"
      },
      {
        "name": "errorCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "errorCode   String?"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-staff-schedule",
    "sourceProject": "beautyWellnes",
    "name": "StaffSchedule",
    "displayName": "Staff Schedule",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id           String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId      String"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId String"
      },
      {
        "name": "dayOfWeek",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dayOfWeek    Int      // 0 = Sunday, 6 = Saturday"
      },
      {
        "name": "startTime",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startTime    String   // e.g., \"09:00\""
      },
      {
        "name": "endTime",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endTime      String   // e.g., \"17:00\""
      },
      {
        "name": "isWorking",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isWorking    Boolean  @default(true)"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon      Salon @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "technician",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician User  @relation(fields: [technicianId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-station",
    "sourceProject": "beautyWellnes",
    "name": "Station",
    "displayName": "Station",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id        String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId   String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name      String   // e.g., \"Chair 1\", \"Station A\""
      },
      {
        "name": "type",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type      String?  // e.g., \"nail\", \"hair\", \"spa\""
      },
      {
        "name": "active",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active    Boolean  @default(true)"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon       Salon             @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "assignments",
        "type": "StationAssignment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignments StationAssignment[]"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-station-assignment",
    "sourceProject": "beautyWellnes",
    "name": "StationAssignment",
    "displayName": "Station Assignment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id           String   @id @default(cuid())"
      },
      {
        "name": "stationId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stationId    String"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId String"
      },
      {
        "name": "dayOfWeek",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dayOfWeek    Int?     // null = all days"
      },
      {
        "name": "startTime",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startTime    String?  // null = all day"
      },
      {
        "name": "endTime",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endTime      String?"
      },
      {
        "name": "station",
        "type": "Station",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "station    Station @relation(fields: [stationId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "technician",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician User    @relation(\"StationAssignments\", fields: [technicianId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-task",
    "sourceProject": "beautyWellnes",
    "name": "Task",
    "displayName": "Task",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id               String     @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId          String"
      },
      {
        "name": "title",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title            String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description      String?"
      },
      {
        "name": "type",
        "type": "TaskType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "OTHER",
        "sourceLine": "type             TaskType   @default(OTHER)"
      },
      {
        "name": "status",
        "type": "TaskStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "OPEN",
        "sourceLine": "status           TaskStatus @default(OPEN)"
      },
      {
        "name": "dueDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate          DateTime?"
      },
      {
        "name": "assignedToUserId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignedToUserId String?"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon      Salon @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "assignedTo",
        "type": "User?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignedTo User? @relation(fields: [assignedToUserId], references: [id], onDelete: SetNull)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-technician-skill",
    "sourceProject": "beautyWellnes",
    "name": "TechnicianSkill",
    "displayName": "Technician Skill",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id           String    @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId      String"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId String"
      },
      {
        "name": "skillName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "skillName    String"
      },
      {
        "name": "level",
        "type": "SkillLevel",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "INTERMEDIATE",
        "sourceLine": "level        SkillLevel @default(INTERMEDIATE)"
      },
      {
        "name": "certified",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "certified    Boolean   @default(false)"
      },
      {
        "name": "certExpiry",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certExpiry   DateTime?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes        String?"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon      Salon @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "technician",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician User  @relation(\"TechnicianSkills\", fields: [technicianId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-time-off-request",
    "sourceProject": "beautyWellnes",
    "name": "TimeOffRequest",
    "displayName": "Time Off Request",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id           String            @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId      String"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId String"
      },
      {
        "name": "startDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate    DateTime"
      },
      {
        "name": "endDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate      DateTime"
      },
      {
        "name": "reason",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason       String?"
      },
      {
        "name": "status",
        "type": "TimeOffStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status       TimeOffStatus     @default(PENDING)"
      },
      {
        "name": "approvedById",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approvedById String?"
      },
      {
        "name": "approvedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approvedAt   DateTime?"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon      Salon @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "technician",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician User  @relation(\"TechnicianTimeOff\", fields: [technicianId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "approvedBy",
        "type": "User?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approvedBy User? @relation(\"ApprovedTimeOff\", fields: [approvedById], references: [id], onDelete: SetNull)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-tip",
    "sourceProject": "beautyWellnes",
    "name": "Tip",
    "displayName": "Tip",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId       String"
      },
      {
        "name": "appointmentId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "appointmentId String   @unique"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId  String"
      },
      {
        "name": "amount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount        Float"
      },
      {
        "name": "method",
        "type": "PaymentMethod",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "method        PaymentMethod"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon       Salon       @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "appointment",
        "type": "Appointment",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointment Appointment @relation(fields: [appointmentId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "technician",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician  User        @relation(fields: [technicianId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-user",
    "sourceProject": "beautyWellnes",
    "name": "User",
    "displayName": "User",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id                String            @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId           String"
      },
      {
        "name": "locationId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "locationId        String?           // null = not assigned to a specific location"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name              String"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email             String            @unique"
      },
      {
        "name": "hashedPassword",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hashedPassword    String"
      },
      {
        "name": "role",
        "type": "UserRole",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role              UserRole"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone             String?"
      },
      {
        "name": "active",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active            Boolean           @default(true)"
      },
      {
        "name": "preferredLanguage",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"en\"",
        "sourceLine": "preferredLanguage String            @default(\"en\")"
      },
      {
        "name": "level",
        "type": "TechnicianLevel?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "level             TechnicianLevel?  // For pricing tiers"
      },
      {
        "name": "imageUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl          String?           // Profile photo"
      },
      {
        "name": "emailVerified",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "emailVerified     Boolean           @default(false)"
      },
      {
        "name": "emailVerifyToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "emailVerifyToken  String?"
      },
      {
        "name": "passwordResetToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "passwordResetToken String?"
      },
      {
        "name": "passwordResetExpires",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "passwordResetExpires DateTime?"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon                 Salon                  @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "location",
        "type": "Location?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location              Location?              @relation(\"UserLocation\", fields: [locationId], references: [id], onDelete: SetNull)"
      },
      {
        "name": "appointments",
        "type": "Appointment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointments          Appointment[]          @relation(\"TechnicianAppointments\")"
      },
      {
        "name": "preferredByClients",
        "type": "Client[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "preferredByClients    Client[]               @relation(\"PreferredTechnician\")"
      },
      {
        "name": "visits",
        "type": "Visit[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "visits                Visit[]"
      },
      {
        "name": "staffSchedules",
        "type": "StaffSchedule[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staffSchedules        StaffSchedule[]"
      },
      {
        "name": "assignedTasks",
        "type": "Task[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignedTasks         Task[]"
      },
      {
        "name": "tips",
        "type": "Tip[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tips                  Tip[]"
      },
      {
        "name": "galleryPhotos",
        "type": "GalleryPhoto[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "galleryPhotos         GalleryPhoto[]"
      },
      {
        "name": "recurringAppointments",
        "type": "RecurringAppointment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recurringAppointments RecurringAppointment[] @relation(\"RecurringTechnician\")"
      },
      {
        "name": "commissions",
        "type": "Commission[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commissions           Commission[]           @relation(\"TechnicianCommissions\")"
      },
      {
        "name": "commissionRules",
        "type": "CommissionRule[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commissionRules       CommissionRule[]       @relation(\"TechnicianCommissionRules\")"
      },
      {
        "name": "retailSales",
        "type": "RetailSale[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retailSales           RetailSale[]           @relation(\"SalesByUser\")"
      },
      {
        "name": "timeOffRequests",
        "type": "TimeOffRequest[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeOffRequests       TimeOffRequest[]       @relation(\"TechnicianTimeOff\")"
      },
      {
        "name": "approvedTimeOff",
        "type": "TimeOffRequest[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approvedTimeOff       TimeOffRequest[]       @relation(\"ApprovedTimeOff\")"
      },
      {
        "name": "skills",
        "type": "TechnicianSkill[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "skills                TechnicianSkill[]      @relation(\"TechnicianSkills\")"
      },
      {
        "name": "stationAssignments",
        "type": "StationAssignment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stationAssignments    StationAssignment[]    @relation(\"StationAssignments\")"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-visit",
    "sourceProject": "beautyWellnes",
    "name": "Visit",
    "displayName": "Visit",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id                String   @id @default(cuid())"
      },
      {
        "name": "appointmentId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "appointmentId     String   @unique"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId          String"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId      String"
      },
      {
        "name": "nailShape",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nailShape         String?"
      },
      {
        "name": "length",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "length            String?"
      },
      {
        "name": "designDescription",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "designDescription String?"
      },
      {
        "name": "colorCodes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "colorCodes        String?"
      },
      {
        "name": "photos",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "photos            Json?"
      },
      {
        "name": "rating",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating            Int?"
      },
      {
        "name": "appointment",
        "type": "Appointment",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointment Appointment @relation(fields: [appointmentId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client      Client      @relation(fields: [clientId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "technician",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician  User        @relation(fields: [technicianId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-voice-call",
    "sourceProject": "beautyWellnes",
    "name": "VoiceCall",
    "displayName": "Voice Call",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String   @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId     String"
      },
      {
        "name": "fromNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fromNumber  String?"
      },
      {
        "name": "toNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "toNumber    String?"
      },
      {
        "name": "callSid",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "callSid     String?  @unique"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"ringing\"",
        "sourceLine": "status      String   @default(\"ringing\") // ringing, in-progress, completed, failed"
      },
      {
        "name": "transcript",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transcript  String?"
      },
      {
        "name": "duration",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration    Int?"
      },
      {
        "name": "intent",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "intent      String?"
      },
      {
        "name": "outcome",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outcome     String?  // booked, transferred, voicemail, abandoned"
      },
      {
        "name": "appointmentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointmentId String?"
      }
    ]
  },
  {
    "id": "beauty-wellnes-prisma-schema-prisma-waitlist",
    "sourceProject": "beautyWellnes",
    "name": "Waitlist",
    "displayName": "Waitlist",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String         @id @default(cuid())"
      },
      {
        "name": "salonId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salonId       String"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String?"
      },
      {
        "name": "clientName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientName    String"
      },
      {
        "name": "clientPhone",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientPhone   String"
      },
      {
        "name": "partySize",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "partySize     Int            @default(1)"
      },
      {
        "name": "serviceId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceId     String?"
      },
      {
        "name": "preferredTech",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "preferredTech String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "status",
        "type": "WaitlistStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "WAITING",
        "sourceLine": "status        WaitlistStatus @default(WAITING)"
      },
      {
        "name": "estimatedWait",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedWait Int?"
      },
      {
        "name": "notifiedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notifiedAt    DateTime?"
      },
      {
        "name": "seatedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seatedAt      DateTime?"
      },
      {
        "name": "salon",
        "type": "Salon",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salon  Salon   @relation(fields: [salonId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "client",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client Client? @relation(fields: [clientId], references: [id], onDelete: SetNull)"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-lib-db-ts-ai-advice-log-v7",
    "sourceProject": "coaching-wellness",
    "name": "ai_advice_log_v7",
    "displayName": "Ai Advice Log V7",
    "framework": "SQL",
    "sourceFile": "src/lib/db.ts",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id INTEGER PRIMARY KEY AUTOINCREMENT"
      },
      {
        "name": "endpoint",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint TEXT NOT NULL"
      },
      {
        "name": "type",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type TEXT"
      },
      {
        "name": "clientName",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientName TEXT"
      },
      {
        "name": "not_medical_advice",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "not_medical_advice INTEGER DEFAULT 1"
      },
      {
        "name": "requestSummary",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requestSummary TEXT"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-lib-db-ts-appointments",
    "sourceProject": "coaching-wellness",
    "name": "appointments",
    "displayName": "Appointments",
    "framework": "SQL",
    "sourceFile": "src/lib/db.ts",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id TEXT PRIMARY KEY"
      },
      {
        "name": "clientId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId TEXT"
      },
      {
        "name": "clientName",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientName TEXT"
      },
      {
        "name": "coachName",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coachName TEXT"
      },
      {
        "name": "appointmentType",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appointmentType TEXT"
      },
      {
        "name": "date",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date TEXT"
      },
      {
        "name": "time",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "time TEXT"
      },
      {
        "name": "duration",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration INTEGER"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status TEXT DEFAULT 'scheduled'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "location",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location TEXT"
      },
      {
        "name": "creationType",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'manual'",
        "sourceLine": "creationType TEXT DEFAULT 'manual'"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-lib-db-ts-clients",
    "sourceProject": "coaching-wellness",
    "name": "clients",
    "displayName": "Clients",
    "framework": "SQL",
    "sourceFile": "src/lib/db.ts",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id TEXT PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "email",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email TEXT UNIQUE NOT NULL"
      },
      {
        "name": "phone",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone TEXT"
      },
      {
        "name": "age",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "age INTEGER"
      },
      {
        "name": "gender",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gender TEXT"
      },
      {
        "name": "goals",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "goals TEXT"
      },
      {
        "name": "healthConditions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "healthConditions TEXT"
      },
      {
        "name": "startDate",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate TEXT"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status TEXT DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-lib-db-ts-coach-match-history-v7",
    "sourceProject": "coaching-wellness",
    "name": "coach_match_history_v7",
    "displayName": "Coach Match History V7",
    "framework": "SQL",
    "sourceFile": "src/lib/db.ts",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id INTEGER PRIMARY KEY AUTOINCREMENT"
      },
      {
        "name": "clientId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId TEXT"
      },
      {
        "name": "goals",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "goals TEXT"
      },
      {
        "name": "conditions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "conditions TEXT"
      },
      {
        "name": "topN",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "topN INTEGER"
      },
      {
        "name": "candidateCount",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "candidateCount INTEGER"
      },
      {
        "name": "topCoachId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "topCoachId TEXT"
      },
      {
        "name": "topScore",
        "type": "REAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "topScore REAL"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-app-api-coach-match-route-ts-coach-match-history-v7",
    "sourceProject": "coaching-wellness",
    "name": "coach_match_history_v7",
    "displayName": "Coach Match History V7",
    "framework": "SQL",
    "sourceFile": "src/app/api/coach-match/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id INTEGER PRIMARY KEY AUTOINCREMENT"
      },
      {
        "name": "clientId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId TEXT"
      },
      {
        "name": "goals",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "goals TEXT"
      },
      {
        "name": "conditions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "conditions TEXT"
      },
      {
        "name": "topN",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "topN INTEGER"
      },
      {
        "name": "candidateCount",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "candidateCount INTEGER"
      },
      {
        "name": "topCoachId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "topCoachId TEXT"
      },
      {
        "name": "topScore",
        "type": "REAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "topScore REAL"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-lib-db-ts-coaches",
    "sourceProject": "coaching-wellness",
    "name": "coaches",
    "displayName": "Coaches",
    "framework": "SQL",
    "sourceFile": "src/lib/db.ts",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id TEXT PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "email",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email TEXT UNIQUE NOT NULL"
      },
      {
        "name": "specialization",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialization TEXT"
      },
      {
        "name": "certifications",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certifications TEXT"
      },
      {
        "name": "experience",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "experience INTEGER"
      },
      {
        "name": "bio",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bio TEXT"
      },
      {
        "name": "availability",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "availability TEXT"
      },
      {
        "name": "rating",
        "type": "REAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating REAL"
      },
      {
        "name": "imageUrl",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl TEXT"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-lib-db-ts-exercises",
    "sourceProject": "coaching-wellness",
    "name": "exercises",
    "displayName": "Exercises",
    "framework": "SQL",
    "sourceFile": "src/lib/db.ts",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id TEXT PRIMARY KEY"
      },
      {
        "name": "clientId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId TEXT"
      },
      {
        "name": "clientName",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientName TEXT"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "muscleGroup",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "muscleGroup TEXT"
      },
      {
        "name": "equipment",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment TEXT"
      },
      {
        "name": "instructions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "instructions TEXT"
      },
      {
        "name": "sets",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sets INTEGER"
      },
      {
        "name": "reps",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reps INTEGER"
      },
      {
        "name": "restTime",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "restTime INTEGER"
      },
      {
        "name": "videoUrl",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "videoUrl TEXT"
      },
      {
        "name": "creationType",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'manual'",
        "sourceLine": "creationType TEXT DEFAULT 'manual'"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-app-api-gap-nonai-coaching-wellness-video-sessions-integration-route-ts-gap-features",
    "sourceProject": "coaching-wellness",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-nonai-coaching-wellness/video-sessions-integration/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-app-api-gap-nonai-coaching-wellness-push-notification-mobile-shell-route-ts-gap-features",
    "sourceProject": "coaching-wellness",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-nonai-coaching-wellness/push-notification-mobile-shell/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-app-api-gap-nonai-coaching-wellness-public-discoverability-seo-landing-pages-per-coach-route-ts-gap-features",
    "sourceProject": "coaching-wellness",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-nonai-coaching-wellness/public-discoverability-seo-landing-pages-per-coach/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-app-api-gap-nonai-coaching-wellness-payments-subscription-billing-route-ts-gap-features",
    "sourceProject": "coaching-wellness",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-nonai-coaching-wellness/payments-subscription-billing/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-app-api-gap-nonai-coaching-wellness-marketplace-listing-for-coaches-route-ts-gap-features",
    "sourceProject": "coaching-wellness",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-nonai-coaching-wellness/marketplace-listing-for-coaches/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-app-api-gap-nonai-coaching-wellness-group-cohort-coaching-route-ts-gap-features",
    "sourceProject": "coaching-wellness",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-nonai-coaching-wellness/group-cohort-coaching/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-app-api-gap-ai-coaching-wellness-multi-modal-photo-based-meal-logging-route-ts-gap-features",
    "sourceProject": "coaching-wellness",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-ai-coaching-wellness/multi-modal-photo-based-meal-logging/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-app-api-gap-ai-coaching-wellness-ai-biometric-trend-interpretation-when-paired-with-wearables-route-ts-gap-features",
    "sourceProject": "coaching-wellness",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-ai-coaching-wellness/ai-biometric-trend-interpretation-when-paired-with-wearables/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-app-api-gap-ai-coaching-wellness-ai-adherence-prediction-modeling-route-ts-gap-features",
    "sourceProject": "coaching-wellness",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-ai-coaching-wellness/ai-adherence-prediction-modeling/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-lib-db-ts-meal-plans",
    "sourceProject": "coaching-wellness",
    "name": "meal_plans",
    "displayName": "Meal Plans",
    "framework": "SQL",
    "sourceFile": "src/lib/db.ts",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id TEXT PRIMARY KEY"
      },
      {
        "name": "clientId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId TEXT"
      },
      {
        "name": "clientName",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientName TEXT"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category TEXT"
      },
      {
        "name": "calories",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "calories INTEGER"
      },
      {
        "name": "protein",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "protein INTEGER"
      },
      {
        "name": "carbs",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "carbs INTEGER"
      },
      {
        "name": "fat",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fat INTEGER"
      },
      {
        "name": "meals",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meals TEXT"
      },
      {
        "name": "duration",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration TEXT"
      },
      {
        "name": "targetGoal",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "targetGoal TEXT"
      },
      {
        "name": "creationType",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'manual'",
        "sourceLine": "creationType TEXT DEFAULT 'manual'"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-app-api-integrations-email-route-ts-notification-log-v5",
    "sourceProject": "coaching-wellness",
    "name": "notification_log_v5",
    "displayName": "Notification Log V5",
    "framework": "SQL",
    "sourceFile": "src/app/api/integrations/email/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id INTEGER PRIMARY KEY AUTOINCREMENT"
      },
      {
        "name": "channel",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "channel TEXT"
      },
      {
        "name": "recipient",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipient TEXT"
      },
      {
        "name": "subject",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject TEXT"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body TEXT"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'queued'",
        "sourceLine": "status TEXT DEFAULT 'queued'"
      },
      {
        "name": "created_at",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TEXT DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-lib-db-ts-notifications",
    "sourceProject": "coaching-wellness",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "src/lib/db.ts",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id TEXT PRIMARY KEY"
      },
      {
        "name": "userId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId TEXT"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT NOT NULL"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT"
      },
      {
        "name": "type",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'info'",
        "sourceLine": "type TEXT DEFAULT 'info'"
      },
      {
        "name": "isRead",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "isRead INTEGER DEFAULT 0"
      },
      {
        "name": "link",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "link TEXT"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-lib-db-ts-progress-logs",
    "sourceProject": "coaching-wellness",
    "name": "progress_logs",
    "displayName": "Progress Logs",
    "framework": "SQL",
    "sourceFile": "src/lib/db.ts",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id TEXT PRIMARY KEY"
      },
      {
        "name": "clientId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId TEXT"
      },
      {
        "name": "clientName",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientName TEXT"
      },
      {
        "name": "date",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date TEXT"
      },
      {
        "name": "weight",
        "type": "REAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weight REAL"
      },
      {
        "name": "bodyFat",
        "type": "REAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bodyFat REAL"
      },
      {
        "name": "muscleMass",
        "type": "REAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "muscleMass REAL"
      },
      {
        "name": "waterIntake",
        "type": "REAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "waterIntake REAL"
      },
      {
        "name": "sleepHours",
        "type": "REAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sleepHours REAL"
      },
      {
        "name": "energyLevel",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "energyLevel INTEGER"
      },
      {
        "name": "stressLevel",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stressLevel INTEGER"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "creationType",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'manual'",
        "sourceLine": "creationType TEXT DEFAULT 'manual'"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-lib-db-ts-recipes",
    "sourceProject": "coaching-wellness",
    "name": "recipes",
    "displayName": "Recipes",
    "framework": "SQL",
    "sourceFile": "src/lib/db.ts",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id TEXT PRIMARY KEY"
      },
      {
        "name": "clientId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId TEXT"
      },
      {
        "name": "clientName",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientName TEXT"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category TEXT"
      },
      {
        "name": "calories",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "calories INTEGER"
      },
      {
        "name": "protein",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "protein INTEGER"
      },
      {
        "name": "carbs",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "carbs INTEGER"
      },
      {
        "name": "fat",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fat INTEGER"
      },
      {
        "name": "ingredients",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ingredients TEXT"
      },
      {
        "name": "instructions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "instructions TEXT"
      },
      {
        "name": "prepTime",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prepTime INTEGER"
      },
      {
        "name": "cookTime",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cookTime INTEGER"
      },
      {
        "name": "servings",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "servings INTEGER"
      },
      {
        "name": "imageUrl",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl TEXT"
      },
      {
        "name": "creationType",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'manual'",
        "sourceLine": "creationType TEXT DEFAULT 'manual'"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-lib-db-ts-roles",
    "sourceProject": "coaching-wellness",
    "name": "roles",
    "displayName": "Roles",
    "framework": "SQL",
    "sourceFile": "src/lib/db.ts",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id TEXT PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "name TEXT UNIQUE NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "permissions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "permissions TEXT"
      },
      {
        "name": "isDefault",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "isDefault INTEGER DEFAULT 0"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-lib-db-ts-users",
    "sourceProject": "coaching-wellness",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "src/lib/db.ts",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id TEXT PRIMARY KEY"
      },
      {
        "name": "username",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "username TEXT UNIQUE NOT NULL"
      },
      {
        "name": "email",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email TEXT UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password TEXT NOT NULL"
      },
      {
        "name": "firstName",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName TEXT"
      },
      {
        "name": "lastName",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName TEXT"
      },
      {
        "name": "role",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'viewer'",
        "sourceLine": "role TEXT DEFAULT 'viewer'"
      },
      {
        "name": "avatar",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatar TEXT"
      },
      {
        "name": "phone",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone TEXT"
      },
      {
        "name": "isActive",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "isActive INTEGER DEFAULT 1"
      },
      {
        "name": "lastLogin",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastLogin TEXT"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-app-api-integrations-wearable-route-ts-wearable-samples-v5",
    "sourceProject": "coaching-wellness",
    "name": "wearable_samples_v5",
    "displayName": "Wearable Samples V5",
    "framework": "SQL",
    "sourceFile": "src/app/api/integrations/wearable/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id INTEGER PRIMARY KEY AUTOINCREMENT"
      },
      {
        "name": "provider",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider TEXT NOT NULL"
      },
      {
        "name": "client_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_id TEXT"
      },
      {
        "name": "metric",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metric TEXT NOT NULL"
      },
      {
        "name": "value",
        "type": "REAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value REAL"
      },
      {
        "name": "recorded_at",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "recorded_at TEXT DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-lib-db-ts-wellness-goals",
    "sourceProject": "coaching-wellness",
    "name": "wellness_goals",
    "displayName": "Wellness Goals",
    "framework": "SQL",
    "sourceFile": "src/lib/db.ts",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id TEXT PRIMARY KEY"
      },
      {
        "name": "clientId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId TEXT"
      },
      {
        "name": "clientName",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientName TEXT"
      },
      {
        "name": "goalType",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "goalType TEXT"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "targetValue",
        "type": "REAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "targetValue REAL"
      },
      {
        "name": "currentValue",
        "type": "REAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentValue REAL"
      },
      {
        "name": "unit",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit TEXT"
      },
      {
        "name": "startDate",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate TEXT"
      },
      {
        "name": "targetDate",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "targetDate TEXT"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'in_progress'",
        "sourceLine": "status TEXT DEFAULT 'in_progress'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "creationType",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'manual'",
        "sourceLine": "creationType TEXT DEFAULT 'manual'"
      }
    ]
  },
  {
    "id": "coaching-wellness-src-lib-db-ts-workouts",
    "sourceProject": "coaching-wellness",
    "name": "workouts",
    "displayName": "Workouts",
    "framework": "SQL",
    "sourceFile": "src/lib/db.ts",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id TEXT PRIMARY KEY"
      },
      {
        "name": "clientId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId TEXT"
      },
      {
        "name": "clientName",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientName TEXT"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category TEXT"
      },
      {
        "name": "difficulty",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "difficulty TEXT"
      },
      {
        "name": "duration",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration INTEGER"
      },
      {
        "name": "caloriesBurned",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "caloriesBurned INTEGER"
      },
      {
        "name": "exercises",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "exercises TEXT"
      },
      {
        "name": "imageUrl",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl TEXT"
      },
      {
        "name": "creationType",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'manual'",
        "sourceLine": "creationType TEXT DEFAULT 'manual'"
      }
    ]
  }
];
