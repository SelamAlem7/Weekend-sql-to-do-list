
CREATE TABLE "checklist" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"due_date"  DATE,
	"completed" VARCHAR (1)
	


);

INSERT INTO "checklist" 
	("task", "due_date","completed" ) 
VALUES 
	('Weekend Challenge', '11-22-2021', 'N'),
	('Attend Networking Event', '11-19-2021', 'N'),
	('Christmas List', '12-01-2021', 'N'),
	('Eye Exam', '11-22-21', 'N'),
	('Testing Completed', '11-22-21', 'N'),
	('Testing deletion', '11-22-21', 'N'),
	('Testing adding', '11-22-21', 'N'),
	('Testing Completed', '11-22-21', 'N'),
	('Testing update', '11-22-21', 'N'),
	('Testing N', '11-22-21', 'N'),
	('Testing Y', '11-22-21', 'N');

SELECT * FROM "checklist";