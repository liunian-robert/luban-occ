path="/var/www/lubandev/webapps4lubanocc/source";

process="luban-occ-admin-0.0.1-SNAPSHOT.jar";


pid=`(ps -ef | grep "$process" | grep -v "grep") | awk '{print $2}'`;
kill -9 $pid

cd $path/luban-occ
git pull

sleep 2

cd $path/luban-occ/luban-occ-common
mvn clean install

sleep 2

cd  $path/luban-occ/luban-occ-admin
mvn clean install

cd  $path/luban-occ/luban-occ-admin/target

sleep 2

nohup java -jar -Xms1024M -Xmx2048M -server -XX:PermSize=256M -XX:MaxPermSize=512M -Dcom.lubansoft.app.config.dir=/var/www/lubandev/webapps4lubanocc/config/ -Dcom.lubansoft.app.log.dir=/var/www/lubandev/webapps4lubanocc/logs/ -Ddisconf.conf=/var/www/lubandev/webapps4lubanocc/config/disconf.properties  -Dserver.port=8089 -Dserver.servlet.context-path=/lubanocc/admin -Dfile.encoding=utf-8  luban-occ-admin-0.0.1-SNAPSHOT.jar > /var/www/lubandev/webapps4lubanocc/logs/admin-log.out 2>&1 & tail -f /var/www/lubandev/webapps4lubanocc/logs/admin-log.out
