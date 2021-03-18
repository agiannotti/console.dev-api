BEGIN;


INSERT INTO note (note_name, content, assigned_folder)
VALUES
('One','info', 1),
('Two','info', 2),
('Three','info', 3),
('Four','info', 4),
('Five','info', 5);

COMMIT;