import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTestData1732280885581 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(1, 'Aalto Salsa Society', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2024-09/Aalto_Salsa_Society.png?itok=rkpOM-wy', 'The Aalto Salsa Society is a welcoming community of Latin dance enthusiasts! We teach Salsa and Bachata classes and organize various events throughout the year. 
        
        We want to invite you, whether you’ve been dancing since your childhood or have never even heard of Salsa or Bachata. We will adapt to your abilities, offering weekly classes of various experience levels. You will not only be dancing to keep yourself active, you’ll also be dancing through the dark and cold times of the year without even noticing! 
        
        You can find information on classes and events on our website and telegram channel , or you can even come to one of our socials to ask us in person.', '@ass', '+358 888 888', 'ass@email.com', 10);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(2, 'Aalto University''s Mechatronics Club (AMEK)', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2024-09/AMEK.png?itok=wiRfTL6l', 'AMEK is a professional association for students interested in mechatronics, located in Otaniemi, Espoo. The association''s activities are managed by a board composed of students from Aalto University.
        
        The association brings together students from various fields, including mechanical engineering, automation and systems technology, and electrical engineering, and aims to promote the visibility of the mechatronics field and the success of its members within the industry. Our goal is to work closely with students, Aalto University, and companies in the field. We organize company excursions and other events for our members.', '@amek', '+358 888 888', 'amek@email.com', 12);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(3, 'A!dventures', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/1_6_567w_354h_n/public/2019-05/adventures_logo.jpg?h=97f6b441&itok=DOEQpOzP', 'A!dventures, a.k.a. Aallon Seikkailu-urheilijat, focuses on adventure and extreme sports. We enjoy all the fancy places – mountains, tundras, forests, deserts, and oceans, and all the different sports those places are good for: climbing, hiking, skiing, triathlon and so forth!
        
        ', '@adventures', '+358 888 888', 'adventures@email.com', 14);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(4, 'Polytechnic Sauna Society', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2019-05/polyteknikkojen_saunaseura_logo.png?itok=ylOwfb-m', 'Goal of the Polytechnic Sauna Society (PTSS) is to bring together people interested in sauna and sauna culture as well as promote knowledge in sauna culture and uphold the sauna traditions in the Otaniemi campus area. We arrange sauna evenings and excursions to public saunas as well as other sauna-related events.', '@saunasociety', '+358 888 888', 'saunasociety@email.com', 20);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(5, 'Climbing club Oranki ry', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2019-05/kiipeilykerho-oranki_logo.jpg?itok=vfESnCFV', 'Oranki ry is a climbing club and our purpose is to bring together climbing enthusiasts and those interested in climbing. Additionally, our goal is to promote the hobby opportunities of our members and support the development of a safe and responsible climbing culture within the academic community.
        
        Oranki organizes various events for its members, including regular indoor and outdoor climbing sessions, climbing trips both domestically and internationally, sauna evenings, climbing competitions, and much more!
        
        Oranki is a sub-organization under the Aalto University Student Union, but anyone interested in climbing can become a member.
        ', '@climbingclub', '+358 888 888', 'climbingclub@email.com', 23);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(6, 'Otanko ry', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2023-11/Otanko.png?itok=ecNfriOr', 'Are you tired of the same old gym routine and looking for a fun and unique way to sculpt your body by getting impressive biceps and a stunning six-pack?
        
        Look no further than pole dancing!
        
        And the best part is, you can now experience the thrill of pole dancing in Otaniemi! Otanko ry is an AYY association that offers affordable (30e/year) pole dance classes in Otaniemi.
        
        Join us for weekly classes, exhilarating workshops, and captivating pole dance shows open to both members and the wider community.
        
        To get all the details and sign up for classes, become a member by filling out our quick sign-up form! Your first class is on us, and there''s no need to pre-register. Simply choose a beginner class from our website at a convenient time and show up! ', '@otankory', '+358 888 888', 'otankory@email.com', 12);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(7, 'Aalto Beer Pong', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2019-05/aalto_beer_pong_logo.png?itok=5cvvpBqv', 'Aalto Beer Pong was founded in December 2011. The main objective of the association is to promote the Beer Pong better known in Finland. Aalto Beer Pong is a non-profit association.
        
        The association organizes regular tournaments and member events. We will also provide instruction to the sport, as well as borrow games tools. We are also working with other associations so ABP can be found from numerous of events.
        
        Annual tournaments
        
        Freshman tournament (fall)
        Finnish Series of Beer Pong (fall)
        Cocktail Pong (fall)
        Students'' Beer Pong Championships (spring)
        
        In addition to the ones above, we organise other theme tournaments and events.', '@aaltobeerpong', '+358 888 888', 'aaltobeerpong@email.com', 18);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(8, 'Aalto Daigaku', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2019-05/aalto_daigaku_maajanbu_logo.png?itok=NvFw0elV', 'Aalto Daigaku Maajanbu ry (or アールト大学麻雀部) is an Espoo-based association founded in September 2013 to bring together players of Riichi mahjong and promote mahjong at Aalto University.
        
        Riichi mahjong is a japanese variation of the old Chinese 4-player game. This is not the solitaire mahjong which many may know, but a complex and exciting game popular in Japan.
        
        Our association is open for everyone interested in Riichi mahjong. Our activities include weekly mahjong sessions during semesters as well as tournaments and excursions.', '@aaltodaigaku', '+358 888 888', 'aaltodaigaku@email.com', 22);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(9, 'Otakut', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2024-07/Otakut-Logo-2013%20%281%29.png?itok=WW8Q-zwZ', 'Otakut is an anime club in Espoo, affiliated with Aalto University''s Student Union since May 1996. We support hobbies related to Japanese animated movies, series and comics.
        
        Activities
        - Anime Evenings
        - Movie Nights and Marathons
        - Game and Karaoke Nights
        - Friday Social Events
        - Outings and Collaborations
        - Convention Attendance
        
        Events are centered in Otaniemi.
        ', '@otakut', '+358 888 888', 'otakut@email.com', 11);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(10, 'Aalto-Basket', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2019-05/aaltobasket_logo.png?itok=dGaniM1S', 'Aalto-Basket is the basketball team of Aalto University from Espoo.
        Our club has long traditions of student sports, being founded way back in 1981.
        During recent years, the club has grown, and nowadays consists of four teams:
        
        • Men’s 1st team: Plays in 2nd division, practices twice a week
        • Men’s 2nd team: Plays in 4th division, practices twice a week
        • Men’s 3rd team: Plays in 5th division, practices once a week
        • Women’s team: Playes in 4th division, practices twice a week
        
        Each team is looking for new players for the upcoming season (or just to join our practices) – So, feel free to contact us!', '@aaltobasket', '+358 888 888', 'aaltobasket@email.com', 23);
    `);
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DELETE FROM public.association WHERE name='Aalto Salsa Society';
        DELETE FROM public.association WHERE name='Aalto University's Mechatronics Club (AMEK)';
        DELETE FROM public.association WHERE name='A!dventures';
        DELETE FROM public.association WHERE name='Polytechnic Sauna Society';
        DELETE FROM public.association WHERE name='Climbing club Oranki ry';
        DELETE FROM public.association WHERE name='Otanko ry';
        DELETE FROM public.association WHERE name='Aalto Beer Pong';
        DELETE FROM public.association WHERE name='Aalto Daigaku';
        DELETE FROM public.association WHERE name='Otakut';
        DELETE FROM public.association WHERE name='Aalto-Basket';
        `);
      }
}
