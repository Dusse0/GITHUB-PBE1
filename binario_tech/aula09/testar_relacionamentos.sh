# 1. Cadastra uma leitura NORMAL (85°C - Não deve aparecer no alerta)
curl -s -X POST http://localhost:3000/api/v1/telemetria \
  -H "Content-Type: application/json" \
  -d '{"veiculo_id":1,"velocidade":80.0,"temperatura_motor":85.0}' | jq .

# 2. Cadastra uma leitura CRÍTICA (98°C - Deve aparecer no alerta)
curl -s -X POST http://localhost:3000/api/v1/telemetria \
  -H "Content-Type: application/json" \
  -d '{"veiculo_id":1,"velocidade":110.0,"temperatura_motor":98.0}' | jq .

# 3. Consulta NORMAL (Retorna todas as leituras do banco)
echo -e "\n--- RELATÓRIO COMPLETO ---"
curl -s http://localhost:3000/api/v1/telemetria/relatorio | jq .

# 4. Consulta COM FILTRO DE ALERTA (Retorna apenas a de 98°C)
echo -e "\n--- RELATÓRIO DE ALERTAS (> 95°C) ---"
curl -s "http://localhost:3000/api/v1/telemetria/relatorio?alerta=true" | jq .
