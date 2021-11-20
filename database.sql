
CREATE TABLE "checklist" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"completed" BOOLEAN DEFAULT FALSE,
	"due_date"  DATE 


);

INSERT INTO "checklist" 
	("task", "due_date") 
VALUES 
	('Weekend Challenge', '11-22-2021'),
	('Attend Networking Event', '11-19-2021'),
	('Christmas List', '12-01-2021'),
	('Eye Exam', '11-22-21');

SELECT * FROM "checklist";