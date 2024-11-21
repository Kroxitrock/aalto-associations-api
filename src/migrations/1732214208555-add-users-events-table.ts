import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUsersEventsTable1732214208555 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`CREATE TABLE public.users_events (
	user_id int4 NOT NULL,
	event_id int4 NOT NULL,
	CONSTRAINT users_events_pk PRIMARY KEY (event_id,user_id),
	CONSTRAINT users_events_user_fk FOREIGN KEY (user_id) REFERENCES public."user"(id),
	CONSTRAINT users_events_event_fk FOREIGN KEY (event_id) REFERENCES public."event"(id)
);
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE public.users_events;`);
  }
}
